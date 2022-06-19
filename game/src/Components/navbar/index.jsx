import React,{useState} from "react";
import styled from "styled-components";
import avatar from "../../images/avatar.png";
import { Marginer } from "../marginer";
import {BsFillChatTextFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import Chat from "../Chat/chat";
//navigation bar for the whole app
const NavbarContainer = styled.div`
  width  : 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2em;
  background-color: ${({useTransparent}) => useTransparent? "transparent":"#3164F4"};

`;
const LogoConatiner=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
const Title=styled.h2`
margin: 0px 0px 0px 60px;
font-size: 15px;
color: black;
justify-content: space-evenly;

`;
const IconContainer=styled.div`
color: #fff;
font-size: 30px;
`;
const AccessibilityContainer=styled.div`
display: flex;
align-items: center;


`;
const Input=styled.input`
width: 200px;
height: 25px;
border: none;
border-radius: 5px;
margin-left: 10px;
`;

const AvatarImage =  styled.div`
  width: 35px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Sidebar=styled.nav`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #3164F4;
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({left})=> left?'0':'-100%'};
  transition: 850ms;
  z-index: 1;
`;
const ChatContainer=styled.div`
width:400px;
display:flex;
flex-direction: column;
`;
//navebar with two states logged in or not!
//depinding on the value of the {prop:isLoggedIn} the chat button/avatar/level will be displayed or not

export function Navbar({isLoggedIn,useTransparent}){
  //Hook: the state of the side bar open or not
  const [isOpen, setSidebar] = useState(false);
  //onClick on the chat icon or close icon this method is called, it inverts the value of the sideBar state{isOpen}
  const showSidebar = () => setSidebar(!isOpen);
  //should display a window of account details
  const[showAccount, setShowAccount]=useState(false);
  //sets the chat nickname
  const [username, setUsername] = useState("");
  console.log(isLoggedIn);
  const openAccount=()=>{
    setShowAccount(prev=>!prev)
  }
 
return(
  <>
    <NavbarContainer useTransparent={useTransparent}> 
    <AccessibilityContainer>
      {isLoggedIn?(
        <IconContainer>
        <BsFillChatTextFill onClick={showSidebar}/>
        </IconContainer>
      ):null}
     <LogoConatiner>
        <Title> THE</Title>
       <Title>INNOVATION</Title>
       <Title>GAME</Title>
       </LogoConatiner>
       </AccessibilityContainer>
       {isLoggedIn?(
     <AccessibilityContainer>
      <button  >log Out</button>
       <Marginer direction="horizontal" margin= {30} />
     <AvatarImage onClick={openAccount}>
       <img src={avatar} alt="" />
     </AvatarImage>
     </AccessibilityContainer>
     ):null}
     </NavbarContainer>
    <Sidebar left={isOpen? '{console.console.log(true)}':''}>
    <Marginer direction="vertical" margin= {20} />
    <IconContainer>
    <AiOutlineClose onClick={showSidebar} />
    <Marginer direction="vertical" margin= {40} />
    </IconContainer>
    <ChatContainer>
    <Input
            type="text"
            placeholder="Enter a chat nickname"
            
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Marginer direction="vertical" margin= {20} />
    <Chat username={username}/>
    </ChatContainer>
    </Sidebar>
    </>
);
}