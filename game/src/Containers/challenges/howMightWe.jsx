import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import {  PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { useState } from "react";
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

export function HowMeightWe(){
    const [isLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        <QandA>
        <h2>Translate your insight statements into opportunities for design by reframing them as <br/> “How Might We” questions. </h2>
        </QandA>
        <QandA>
        <h2>for each step, type in the box what did you get from your immersion step</h2>
        <Marginer direction="vertical" margin={20}/>

       <StepBox stepNum="step 1" stepTitel="look at the insight statements that you’ve created."/>
       </QandA>
       <QandA>
           <Title>Start by looking at the insight statements that you’ve created.</Title>
           <Title> Try rephrasing them as questions by adding “How might we” at the beginning.</Title>
           <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepContainer>
       <StepBox stepNum="step 2" stepTitel="do your insights suggest several opportunities for your design"/>
       <QandA>
           <Title>The goal is to find opportunities for design, so if your insights suggest several</Title>
           <Title> How Might We questions that’s great.</Title>
           <AnswerBox/>
       </QandA>
       
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 3" stepTitel="it should allow for a variety of solutions"/>
       <QandA>
           <Title>Now take a look at your How Might We question and ask yourself </Title>
           <Title>if it allows for a variety of solutions. If it doesn’t, broaden it. </Title>
           <Title>Your How Might We should generate a number of possible answers</Title>
           <Title> and will become a launchpad for your Brainstorms </Title>
           <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 4" stepTitel="They shouldn't be too broad"/>
       <QandA>
           <Title>Finally, make sure that your How Might We’s aren’t too broad.</Title>
           <Title>It’s a tricky process but a good How Might We should give you both a narrow enough frame</Title>
           <Title>to let you know where to start your Brainstorm, but also enough breadth to give you room</Title>
           <Title> to explore wild ideas.</Title>
           <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={300}/>
       </PageContainer>
    
}