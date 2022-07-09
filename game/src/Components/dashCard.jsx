import React from "react";
import styled from "styled-components";
//styled componet for the circles on the dashboard, radius and color can be changed
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
text-decoration: none;
border: none;
transition: all 200ms ease-in-out;
:hover{

transform: scale(1.1); 

}
`;

export function DashCard(props){
    const {backgroundC}=props;
    const {radius}=props;
    const {onclick}=props;
    return (<Card onClick={onclick} radius={radius} backgroundC={backgroundC}> {props.children}</Card>);
}