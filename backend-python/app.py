from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from openai import OpenAI
import sentence_transformers
from chromadb.utils import embedding_functions
from datasets import load_dataset
import chromadb
# Point to the local server
client = OpenAI(base_url="http://localhost:1234/v1", api_key="not-needed")


app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.post("/rag")
# @cross_origin()
def rag():
    if request.is_json:
        param = request.get_json()
        context = perform_search(param['input'], 2, 1)
        response = call_llm(context[0][0]["Instructions"])
        return response, 200  # return context 
    return {"error": "Request must be JSON"}, 415

def perform_search(query,count, k):
    dataset = load_dataset("csv", data_files="13k-recipes.csv",keep_default_na=False )
    sentence_transformer_ef = embedding_functions.SentenceTransformerEmbeddingFunction(model_name="all-mpnet-base-v2")
    chroma_client = chromadb.PersistentClient(path="./persistent_db") #see if the chromaDB has already been created
    if count == 1:
        context = chroma_client.create_collection(name="context14", embedding_function=sentence_transformer_ef)
        context.add(
            ids=[str(i) for i in range(0, 100)],  # IDs are just strings
            documents=[dataset['train'][i]['Cleaned_Ingredients'] for i in range(0, 100)],
            metadatas=[{'Instructions':dataset['train'][i]['Instructions']} for i in range(0, 100)],
            )
    else:
        context = chroma_client.get_collection(name="context14", embedding_function=sentence_transformer_ef) #if the vectorstore already exist

    results = context.query(
    query_texts=query,
    n_results=k
    )
    return results['metadatas']

def call_llm(input):
    
    history = [
        {"role": "system", "content": "You are an intelligent assistant. You always provide well-reasoned answers that are both correct and helpful."},
        {"role": "user", "content": input},
    ]
    
    completion = client.chat.completions.create(
        model="local-model", # this field is currently unused
        messages=history,
        temperature=0.7,
        stream=False,
    )
    
    return completion.choices[0].message.content