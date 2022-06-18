import React,{useState} from "react";
import styled from "styled-components";
import { Button } from "../button";
import avatar from "../../images/avatar.png";
import { Marginer } from "../marginer";
import {BsFillChatTextFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";

import { Link } from "react-router-dom";
import Chat from "../Chat/chat";

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
const Seperator=styled.div`
min-height: 50%;
width: 1px;
background-color: #fff;
`;
const AvatarImage =  styled.div`
  width: 35px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;
const Textstyle=styled.h2`
color: #fff;
font-size: 20px;
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
export function Navbar({username,isLoggedIn,useTransparent}){
  // const {useTransparent}=props;
  // const {username}=props;
  // const {left}=props;
 // const isLoggedIn=props;
  const [isOpen, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!isOpen);
  const[showAccount, setShowAccount]=useState(false);
 //const[loggedIn, setLoggedIn]=useState(false);
 // setLoggedIn(isLoggedIn)
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
    <Chat username={username}/>
    </Sidebar>
    </>
);
}