from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
data = []

@app.route('/', methods=['GET', 'POST'])
def home():
    global data
    if request.method == 'POST':
        new_data = request.json
        data.append(new_data)
        return jsonify(data)
    elif request.method == 'GET':
        return jsonify(data)  
    
def getData():
    return data

if __name__ == '__main__':
    app.run(debug=True, port=8000)