import React from "react";
import styled from "styled-components";

const BoxContainer=styled.div`
width: 1050px;
height: 187px;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

`;
const Circle=styled.div`
display: flexbox;
align-items: center;
justify-content: center;
color: #fff;
font-weight: 700;
font-size: 40px;
width: 187px;
height: 187px;
border-radius: 187px;
background-color: #3164F4;
position: absolute;
content:${({stepNum})=> stepNum?stepNum:"Empty"} ;

`;
const Rect=styled.div`
display: flexbox;
align-items: center;
justify-content: center;
color: #fff;
font-weight: 700;
font-size: 20px;
width: 800px;
height: 60px;
background-color: #3164F4;
margin-left: 150px;
z-index: 2;
border-radius: 60px;
content:${({stepTitel})=> stepTitel?stepTitel:"Empty"} ;

`;
export function StepBox(props){
    const {stepNum}=props;
    const {stepTitel}=props;
    
return <BoxContainer>
    <Circle > {stepNum} </Circle>
    
    <Rect>{stepTitel}</Rect>
    
</BoxContainer>
}