import React,{useState} from "react";
import styled from "styled-components";
import avatar from "../../images/avatar.png";
import { Marginer } from "../marginer";
import {BsFillChatTextFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import Chat from "../Chat/chat";
import { useNavigate } from 'react-router-dom';

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
const Account=styled.div`
  background: linear-gradient(
      
      #3164F4 0%,
      rgb(151, 140, 234) 100%
    );;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 68px;
  right: 30px;
  list-style: none;
  text-align: start;
  transition: 850ms;
  z-index: 1;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 200ms ease-in-out;
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
  cursor:pointer;
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
const Spacer=styled.div`
width: 100px;
`;
const ButtonOut=styled.button`
width: 150px;
height: 30px;
background-color:#288313;
color: #fff;
border: none;
border-radius: 5px;
cursor:pointer;
transition: all 200ms ease-in-out;
&:hover{
    background-color: #c31919;
}
&:focus{
    outline: none;
}
`;
const UserData=styled.h1`
font-size: 15px;
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
 

  //LogOut function 
  const navigate = useNavigate();
  const onHandle = async (event) => {
    event.preventDefault();

    
    navigate('/player/access/signin');
    console.log('test');
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
      {showAccount? <Account>
        <UserData>Username: </UserData>
        <UserData>Username: </UserData>
        <form onSubmit={onHandle}>
        <ButtonOut  >log Out</ButtonOut>
        </form>


      </Account>:null}
     <AvatarImage onClick={openAccount}>
       <img src={avatar} alt="" />
     </AvatarImage>
     <Spacer/>
    
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