import React,{ useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Marginer } from "../../Components/marginer";
import io from "socket.io-client";
import {room_nr} from "../addFriendPage/index"
import {SocketContext} from  "../../sockeInstance";

const InnerCont=styled.div`
width: 100%;
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
//justify-content: center;
`;
const InputFeld=styled.input`
height: 96px;
width: 1193px;
background-color: #fff;
color: black;
border-radius: 10px;

`;

//const socket = io.connect("http://localhost:4000");

export function TestPage(){

 //  const socket = useContext(SocketContext);

   //let room = socket.room;
    const [room, setRoom] = useState("7");
    //setRoom(room_nr);
    const [messageReceived, setMessageReceived] = useState("Room connected");
    const [username, setUsername] = useState("");
    const [usernameC, setUsernameC] = useState("");
    const [isLoggedIn,setIsLoggedIn]=useState(true); 
   
    // To send the message to the sever -{emit}
   /* const sendMessage = () => {
       console.log(room);
     socket.emit("send_message", { message: "Hallo an alle in meinem Raum", room});
    };
    
    
    
    socket.on("roomNo", (data) =>{
       // console.log("Angekommen an Parse Room");
        setRoom(data);
    });
    
  // To receive messages from server
    useEffect(() => {
      socket.on("receive_message", (data) => {
      //  console.log(data.room);
        setMessageReceived(data.message);
    });
    }, [socket]);
    
    const roomOutput = "JAA";

    socket.on("connectToRoom", (data) =>{
        roomOutput = data;
    });

    */

return<PageContainer>
    <Navbar username={username} isLoggedIn={isLoggedIn}/>
    
    <InnerCont>
    <Marginer direction="virtical" margin= {15} />
    <h2>Room-Nr.</h2>{room}
    <Marginer direction="virtical" margin= {15} />
    
    <h1>Message: </h1>{messageReceived}
    <Marginer direction="virtical" margin= {15} />
    <button>Press here to show Messege</button>
    <Marginer direction="virtical" margin= {15} />
    <input
            type="text"
            placeholder="Enter a username here"
            
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          
    </InnerCont>
</PageContainer>

}