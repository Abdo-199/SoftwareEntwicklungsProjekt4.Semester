import React, { useContext, useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatStyles.css";
import {SocketContext} from "../../sockeInstance";
function Chat(props) {

  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [currentMes, setcurrentMes] = useState("");
  const [messageList, setMessageList] = useState([]);
  const {username}=props;
  //console.log(username)
  

  let textString  = "";
  let currentMessage = "";
//  get get the text from the inputfield
  const getInputValue = (event)=>{
    const inputText = event.target.value;
    setMessage(inputText);
    setcurrentMes(inputText);
  }

  //For more information
  
   // await socket.emit()
  // send the information from the client to the server
  const sendMessage = async () =>{
    
    const messageData = {
      room: room,
      user: username,
      text: message,
      time: 
      new Date(Date.now()).getHours() + 
      ":" +
      new Date(Date.now()).getMinutes(),
      
    };
    
    setMessage(textString);
    if(messageData.text !==""){

      await socket.volatile.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    console.log("Mess " + messageData.text)

    setcurrentMes("");
    }
    
  };

  // reveive the message from the server to the client
  useEffect(() =>{
    socket.on("receive_message", (data)=>{
      if(currentMessage !== data.text)
      {
        //setMessage(data.message);
        setMessageList((list) => [...list, data]);
      }
      // eslint-disable-next-line
      currentMessage = data.text
      //console.log(data.message);
      console.log("Recieve_message is done ! " + idUs);
    });
    socket.on("giveId", (data) =>{
      // eslint-disable-next-line
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
        {messageList.map((messageContent, i) =>{
                      return (
                        <div className="message" id={username === messageContent.user ? "you" : "other"}>
                            <div className="message-content">
                              <p key={i}>{messageContent.text}</p>
                            </div>
                            <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.user}</p>
                  </div>
                        </div>
                      );
                     
                    })}
               
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input value={currentMes} onChange={getInputValue} type="text" placeholder="Hey.."  onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}/>
        <button onClick={sendMessage} >&#9658;</button>
        
      </div>
      
     

    </div>
  );
}
export default Chat;