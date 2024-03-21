import {fileURLToPath} from "url";
import path from "path";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", "codellama-13b.Q3_K_M.gguf")
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({ context });

const getResponse = async (userInput) => {
  console.log("User: " + userInput);
  const aiResponse = await session.prompt(userInput);
  console.log("AI: " + aiResponse);
  return aiResponse;
};

export { getResponse };
