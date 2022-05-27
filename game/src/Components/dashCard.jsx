import React from "react";
import styled from "styled-components";

const Card=styled.button`
display: flex;
color: black;
font-weight: 800;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
width: ${({radius})=> radius?radius+"px":"15px"};
height: ${({radius})=> radius?radius+"px":"15px"};
border-radius: ${({radius})=> radius?radius+"px":"15px"};
background-color: ${({backgroundC})=> backgroundC? "#"+ backgroundC: "#3164F4"};
cursor: pointer;
border: none;
transition: all 200ms ease-in-out;
:hover{

transform: scale(1.1); 
}
`;

export function DashCard(props){
    const {backgroundC}=props;
    const {radius}=props;
    return (<Card radius={radius} backgroundC={backgroundC}> {props.children}</Card>);
}