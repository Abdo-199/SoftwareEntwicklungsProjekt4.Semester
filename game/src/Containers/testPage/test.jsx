import React,{ useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Marginer } from "../../Components/marginer";
import io from "socket.io-client";
import {room_nr} from "../addFriendPage/index" 
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

const socket = io.connect("http://localhost:4000");

export function TestPage(){

    const [room, setRoom] = useState(room_nr);
    const [messageReceived, setMessageReceived] = useState("ha");

    const sendMessage = () => {
        console.log(room);
      socket.emit("send_message", { message: "Hallo an alle in meinem Raum", room });
    };
    
    socket.on("parse_room", () =>{
        console.log("jaaa bis hier");
    });
    
  
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageReceived(data.message);
    });
    }, [socket]);
    

return<PageContainer>
    <Navbar/>
    
    <InnerCont>
    <Marginer direction="virtical" margin= {15} />
    <h2>Room-Nr.</h2>{room}
    <Marginer direction="virtical" margin= {15} />
    
    <h1>Message: </h1>{messageReceived}
    <Marginer direction="virtical" margin= {15} />
    <button onClick={sendMessage}>Press here to show Messege</button>
    </InnerCont>
</PageContainer>

}