import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";
import { PersonaCard } from "../../Components/personaCard";
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
margin: 0px 0px 5px 0px;
font-size: 22px;
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
        <QandA>
        <h2>There’s no better way to understand the people you’re designing for<br/> than by immersing yourself in their lives and communities.</h2>
        </QandA>
        <QandA>
        <h2>for each step, type in the box what did you get from your immersion step</h2>
        <Marginer direction="vertical" margin={20}/>

       <StepBox stepNum="step 1" stepTitel="spend time with the people you’re designing for"/>
       </QandA>
       <QandA>
           <Title>As you Create a Project Plan, budget enough time and money to</Title>
           <Title>send team members into the field to spend time with the people you’re designing for.</Title>
           <Title>Try to organize a homestay if possible.</Title>
           <AnswerBox/>
       </QandA>
       
       <Marginer direction="vertical" margin={50}/>
       <StepContainer>
       <StepBox stepNum="step 2" stepTitel="Creat personas cards"/>
       <PersonaCard></PersonaCard>
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 3" stepTitel="shadow a person you are designing for "/>
       <QandA>
           <Title>A great Immersion technique is to shadow a person you’re designing for a day.</Title>
           <Title> Ask them all about their lives, how they make decisions, watch them socialize, work, and relax.</Title>
           <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 4" stepTitel="Pay close attention to the person’s surroundings."/>
       <QandA>
           <Title>If you’ve got a shorter window for Immersion, you can still learn a lot by following someone</Title>
           <Title> for a few hours. Pay close attention to the person’s surroundings. You can learn a lot from them.</Title>
           <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={300}/>
       </PageContainer>
    
}
