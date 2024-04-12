
//import { getResponse } from "./llama";
import { useEffect } from "react";
import {io} from "socket.io-client"
import Navigation from "./Navigation";
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
  const [socket, setSocket] = useState(null)
  useEffect(()=>{
    const newSocket = ("")
  },[])
  return (
    <div>
      <Navigation />
      <div className= "p-5 h-screen bg-black">
        <div className="container mx-auto bg-white-900 h-full flex flex-col ">
          <div className="flex-grow p-3 flex flex-row items-end">
             <div className="w-full">
             <ChatMessage type = {"send"} message = {"hi"}/>
             <ChatMessage type = {"receive"} message = {"hi"}/>
            </div>
          </div>
          <div className="h-[100px] p-3 flex justify-center items-center bg-gray-700">
          <input placeholder="type here with your food!"
                 type="text" 
                 className="w-full p-2 bg-transparent text-white border-white"/>
          <button className="bg-violet-600 px-3 py-2 rounded-md mx-2 text-white cursor-pointer">Send</button>
          </div>
         </div>
      </div>
   </div>
 
 );
};

export default Chat;