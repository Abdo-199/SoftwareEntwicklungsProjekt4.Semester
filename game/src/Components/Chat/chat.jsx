import React, { useContext, useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatStyles.css";
import io from "socket.io-client";
import {SocketContext, socket} from "../../sockeInstance";
function Chat() {

  //const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messageList, setMessageList] = useState([]);

  let textString  = "";

  const getInputValue = (event)=>{
    const inputText = event.target.value;
    setMessage(inputText);
    
  }

  /*For more information
  const messageData = {
      room: room,
     //author: username,
      message: message,
      time: 
      new Date(Date.now()).getHours() + 
      ":" +
      new Date(Date.now()).getMinutes(),
      
    };
  //  await socket.emit()
  */
  const sendMessage = async () =>{
      setMessage(textString);
     await socket.emit("send_message", { message: message, room:room});
     setMessageList((list) => [...list, message]);

      console.log("Send_messag is done!");
  };

  

  useEffect(() =>{
    socket.on("receive_message", (data)=>{
      //setMessage(data.message);
      textString = message;
      setMessageList((list) => [...list, data.message]);
      //console.log(data.message);
      console.log("Recieve_messag is done!");
      
      
    });
    console.log("message was: ");
  },[]);


  socket.on("roomNo", (data) =>{
    //console.log("Angekommen an Parse Room");
    setRoom(data);
});

return (
    <div className="chat-window">
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          <div className="message">
                <div>
                  
                    
                  
                  {messageList.map((messageContent) =>{
                      return<div className="message-content">
                       <p>{messageContent}</p>;
                       </div>

                    })}

                </div>  
            </div>
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input onChange={getInputValue} type="text" placeholder="Hey..."/>
        <button onClick={sendMessage} >&#9658;</button>
        
      </div>
      <p>{message}</p>

    </div>
  );
}
export default Chat;