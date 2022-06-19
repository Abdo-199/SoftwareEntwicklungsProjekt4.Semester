import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";
import PersonaList from "../../Components/personas/personaslist";
const QandA=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`;
const StepContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`;
const Title=styled.h2`
margin: 0px 0px 0px 60px;
font-size: 20px;
color: black;
justify-content: space-evenly;

`;
const CheckQ=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 20px;
`;
const Member=styled.h2`
font-weight: 900;
`;
const CheckBox=styled.div`

font-size: 30px;
`;

export function ProtoPersonas(){
    const [isLoggedIn,setIsLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Marginer direction="vertical" margin={50}/>
        <StepContainer>
       <StepBox stepNum="step 1" stepTitel="Start with a calender"/>
       
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 2" stepTitel="check your budgate and staff"/>
       <Marginer direction="vertical" margin={50}/>
      
      <PersonaList/>

       </PageContainer>
    
}