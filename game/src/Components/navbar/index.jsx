import React from "react";
import styled from "styled-components";
import { Button } from "../button";

const NavbarContainer = styled.div`
  width  : 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2em;
  background-color: ${({useTransparent}) => useTransparent? "transparent":"#3164F4"};

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

export function Navbar(props){
  const {useTransparent}=props;
return(
    <NavbarContainer useTransparent={useTransparent}> 
     <h1>The Game</h1>
     <AccessibilityContainer>
     <Button size={12}> Register</Button>

     </AccessibilityContainer>

    </NavbarContainer>
);
}