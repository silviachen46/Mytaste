# MyTaste

There is a wide multitude of recipes available online for different dishes, each with their own ingredients and styles of cooking. Finding the right recipe can be a lengthy process, especially with how many resources are available online. MyTaste streamlines this process by recommending users recipes, while maintaining a tailored account of each recipe which would otherwise take ages to find manually. The flexible recipes of MyTaste can not only accommodate for specific dietary needs such as allergens, but can also be modified instantly if the user is missing an ingredient.

# Use guide for MyTaste
0. run npm install to install all necessary packages, if there's a node_modules folder after downloading then you are good to go!
1. download LM-studio
2. download Llama2-7b-Chat-GGUF
3. start server with server configured as Cross-Origin-Resource-Sharing (CORS) on
4. run npm start in your folder, a web browser will pop up
5. start the backend folder in a separate window in VSCode
6. Start with your first query!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### team roles
Silvia - Running LM Studio locally, building chat interface, connecting frontend and backend.

Adesh - Building and testing with the frontend, authentication methods and user profile.

Neil - Working on designing database with SQLalchemy to store the user data. Data collection for recipes.

Jun - Building backend to interact with both general database and vector database.


### technical architecture and tools used

Node.js for front-end

Python with flask framework for back-end

Langchain for preprocessing the recipes

ChromaDB(vector Database)

Running Large Language models locally with LMStudio

Libraries from huggingface like sentence-transformers and datasets


### A visualization
<img width="540" alt="ae3502cc11fc14658fd1248e25ffcad" src="https://github.com/CS222-UIUC-SP24/group-project-team-32/assets/119599002/1ab57870-88d1-454b-97f6-dfac9a6acb8f">

