import React from "react";
import styled from "styled-components";


const ButtonWrapper=styled.button`
border: none;
outline: none;
color: #fff;
padding: 6px 1.5em;
font-size: ${({size})=> size?size+"px": "18px"};
font-weight: 600;
border-radius: 5px;
background-color:${({backGround})=> backGround? backGround:"#3164F4"} ;
cursor: pointer;
transition: all 200ms ease-in-out;
&:hover{
    background-color: #4967ba;
}
&:focus{
    outline: none;
}
`;
export function Button(props){

    const {size}=props;
    const {backGround}=props;

    return <ButtonWrapper size={size} backGround={backGround}> {props.children}</ButtonWrapper>;
}