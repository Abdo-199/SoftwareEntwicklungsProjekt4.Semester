import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import avatar from "../../images/avatar.png";
import { Marginer } from "../marginer";

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

export function Navbar(props){
  const {useTransparent}=props;
return(
    <NavbarContainer useTransparent={useTransparent}> 
     <LogoConatiner>
        <Title> THE</Title>
       <Title>INNOVATION</Title>
       <Title>GAME</Title>
       </LogoConatiner>
     <AccessibilityContainer>
     <Textstyle>Level:xx</Textstyle>
       <Marginer direction="horizontal" margin= {15} />
       <Textstyle>Score:xx</Textstyle>
       <Marginer direction="horizontal" margin= {15} />
     <AvatarImage>
       <img src={avatar} alt="" />
     </AvatarImage>

     </AccessibilityContainer>

    </NavbarContainer>
);
}