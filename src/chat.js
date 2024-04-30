
// import { getResponse } from "./llama";
import { useEffect, useState } from "react";
// import {io} from "socket.io-client"
import Navigation from "./Navigation";
import axios from "axios";

function ChatMessage({message, type}){
  return(
    <div className={`flex w-full ${type=="send" ? "justify-start" : "justify-end"}`}>
      {type=="send"?(<div className="bg-violet-500 p-2 rounded-tr">
        {message}
      </div>
    ):(
      <div className="bg-white p-2 rounded-tr">
        {message}
      </div>
    )}
    </div>
  )
}
function Chat() {
  const [input, setInput] = useState('hi');
  const [response, setResponse] = useState('');

  const onClick = async () => {
    const result = await axios.post('http://localhost:5000/rag', {
      "input": input
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    setResponse(result.data)
  }
  // }
  // const onClick = async () => {
  //   const result = await axios.post('http://localhost:1234/v1/chat/completions', {
  //     "messages": [ 
  //       { "role": "system", "content": "You are an AI assistant and can help answer user's questions." },
  //       { "role": "user", "content": input }
  //     ], 
  //     "temperature": 0.7, 
  //     "max_tokens": -1,
  //     "stream": false
  //   },
  //   {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   )
  //   setResponse(result.data.choices[0].message.content)

  // }

  // const onClick =  () => { setResponse (input) }

  return (
    <div>
      <Navigation />
      <div className= "p-5 h-screen bg-black">
        <div className="container mx-auto bg-white-900 h-full flex flex-col ">
          <div className="flex-grow p-3 flex flex-row items-end">
             <div className="w-full">
             <ChatMessage type = {"send"} message = {input}/>
             <ChatMessage type = {"receive"} message = {response}/>
            </div>
          </div>
          <div className="h-[100px] p-3 flex justify-center items-center bg-gray-700">
          <input placeholder="type here with your food!"
                 type="text" 
                 className="w-full p-2 bg-transparent text-white border-white"
                 value={input}
                 onChange={event => {
                  setInput(event.target.value);
                }}
                 />
          <button className="bg-violet-600 px-3 py-2 rounded-md mx-2 text-white cursor-pointer"
          onClick= {onClick}
          >Send</button>
          </div>
         </div>
      </div>
   </div>
 
 );
};

export default Chat;