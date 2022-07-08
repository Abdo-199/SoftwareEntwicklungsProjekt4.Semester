import React,{ useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Link } from "react-router-dom";
import { socket} from  "../../sockeInstance";

const NewGameButton=styled.button`
background-color: #3164F4;

border: none;
outline: none;
color: #fff;
padding: 20px 40px;
font-size: 70px;
border-radius: 30px;
font-weight: 800;
cursor: pointer;
transition: all 200ms ease-in-out;
:hover{
background-color: #0a49f6;
transform: scale(1.1); 
}
`;
const JoinYourFriendsButton=styled.button`
background-color: #fff;
color: black;
font-size: 60px;
padding: 0px 15px;
border-radius: 30px;
font-weight: 800;
border: none;
outline: none;
cursor: pointer;
transition: all 200ms ease-in-out;
:hover{
background-color: #0a49f6;
color: #fff;
transform: scale(1.1); 
}
`;
const IdInput=styled.input`
background-color: #a19898;
width: 100%;
height: 40px;
border-radius: 10px;
color: #fff;

`;
const JoinYourFriendsContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

`;
const AddInnerContainer=styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: space-evenly;
`;

export const room_nr = "";

export function AddFriendPage(){

    const getInputValue = (event)=>{
        // show the user input value to console
        const room_nr = event.target.value;
    
        setRoom(room_nr);
    
       //console.log(room_nr);
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }


    const [room, setRoom] = useState("");

    const joinNewRoom = () =>{
        let generateRoom = getRandomInt(500);
        socket.emit("join_room", generateRoom.toString());
        console.log("Joined" + generateRoom);
    }

    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
      };

return <PageContainer>
    <Navbar/>
    <Marginer direction="virtical" margin={200}/>
    <AddInnerContainer>
        <JoinYourFriendsContainer>
        <Link to="/dashboard">
        <JoinYourFriendsButton onClick={joinRoom}>Join your<br/> friends</JoinYourFriendsButton>
        </Link>
        <Marginer direction="virtical" margin={30}/>
        <IdInput  type="roomId" placeholder="Room ID" 
        onChange={getInputValue}/>
        </JoinYourFriendsContainer>
        <Link to="/dashboard">     
        <NewGameButton onClick={joinNewRoom}>New<br/> Game</NewGameButton>
        </Link>
    </AddInnerContainer>
    <Marginer direction="virtical" margin={500}/>
</PageContainer>
}