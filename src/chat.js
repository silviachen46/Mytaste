import React, { useState } from "react";
//import { getResponse } from "./llama";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const response = await getResponse(userInput);
    //setChatHistory((prevHistory) => [...prevHistory, { user: userInput, ai: response }]);
    setUserInput("");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1>Chat Interface</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button type="submit">Send</button>
            </form>
            <div>
              {chatHistory.map((msg, index) => (
                <div key={index}>
                  <p>User: {msg.user}</p>
                  <p>AI: {msg.ai}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
