import React, { useState, useRef } from "react";
//import { getResponse } from "./llama";
import Navigation from "./Navigation";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const count = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userInput, id: count.current }),
    })
      .then((res) => res.json())
      .then((data) => console.log("success"))
      .catch((error) => console.error("Error", error));
    setUserInput("");
    count.current = count.current + 1;
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="">Chat Interface</h1>
            <textarea
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="bg-gray-100 rounded-md p-2"
            />
            <br />
            <button
              type="submit"
              onClick={handleSubmit}
              className="border border-black bg-gray-100 p-2 rounded-md"
            >
              Send
            </button>
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
