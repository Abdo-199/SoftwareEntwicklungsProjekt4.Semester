import React from "react";
import styled from "styled-components";
//styled component for the input field of the answers
const Box=styled.input`
height: 96px;
width: 993px;
background-color: #fff;
color: black;
border: none;
border-radius:20px ;
`;

export function AnswerBox(props){
    
    const onChange=props;
   
    return <Box onChange={onChange}>

    </Box>
}