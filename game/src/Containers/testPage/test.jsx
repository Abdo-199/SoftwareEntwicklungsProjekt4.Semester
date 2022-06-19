import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Marginer } from "../../Components/marginer";
import {SocketContext, socket} from "../../sockeInstance";


const InnerCont=styled.div`
width: 100%;
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
//justify-content: center;
`;


//const socket = io.connect("http://localhost:4000");

export function TestPage(){

 //  const socket = useContext(SocketContext);

   //let room = socket.room:
    const [room, setRoom] = useState("");
    //setRoom(room_nr);
    const [messageReceived, setMessageReceived] = useState("Room connected");
    const [isLoggedIn]=useState(true); 
   
 
  // to get the room number from the input field
    useEffect(() =>{
      
      socket.on("roomNo", (data) =>{
        //console.log("Angekommen an Parse Room");
        setRoom(data);
    });
    },[socket]);

return<PageContainer>
    <Navbar isLoggedIn={isLoggedIn}/>
    <InnerCont>
    <Marginer direction="virtical" margin= {15} />
    <h2>Room-Nr.</h2>{room}
    <Marginer direction="virtical" margin= {15} />
    <h1>Message: </h1>{messageReceived}
    <Marginer direction="virtical" margin= {15} />
    <button>Press here to show Messege</button>
    <Marginer direction="virtical" margin= {15} />      
    </InnerCont>
</PageContainer>

}