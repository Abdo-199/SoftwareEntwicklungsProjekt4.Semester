import React, { useContext, useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatStyles.css";
import io from "socket.io-client";
import {SocketContext, socket} from "../../sockeInstance";
function Chat() {

  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [currentMes, setcurrentMes] = useState("");
  const [messageList, setMessageList] = useState([]);

  let textString  = "";
  let currentMessage = "";

  const getInputValue = (event)=>{
    const inputText = event.target.value;
    setMessage(inputText);
    setcurrentMes(inputText);
  }

  //For more information
  
   // await socket.emit()
  
  const sendMessage = async () =>{
    
    const messageData = {
      room: room,
      user: idUs,
      text: message,
      time: 
      new Date(Date.now()).getHours() + 
      ":" +
      new Date(Date.now()).getMinutes(),
      
    };
    
    setMessage(textString);
    await socket.volatile.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    console.log("Mess " + messageData.text)

    setcurrentMes("");
  };


  useEffect(() =>{
    socket.on("receive_message", (data)=>{
      if(currentMessage !== data.text)
      {
        //setMessage(data.message);
        setMessageList((list) => [...list, data]);
      }
      currentMessage = data.text

      //console.log(data.message);
      console.log("Recieve_message is done ! " + idUs);
    });
    socket.on("giveId", (data) =>{
      idUs = data;
    });
    socket.on("roomNo", (data) =>{
      //console.log("Angekommen an Parse Room");
      setRoom(data);
  });
  },[socket]);

  let idUs = "";


  

return (
    <div className="chat-window">
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          <div className="message">
                <div>
                  <div className="message-content">
                 
                  </div>
                  {messageList.map((messageContent, i) =>{
                      return <p key={i}>{messageContent.text}</p>;
                      <p>{message}</p>
                    })}
                </div>  
            </div>
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input value={currentMes} onChange={getInputValue} type="text" placeholder="Hey..."/>
        <button onClick={sendMessage} >&#9658;</button>
        
      </div>
      <p>{message}</p>

    </div>
  );
}
export default Chat;