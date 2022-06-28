import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { useState } from "react";
import PersonaList from "../../Components/personas/personaslist";
import "./challenegesStyles.css"
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



export function ProtoPersonas(){
    const [isLoggedIn]=useState(true); 
    function handleChangeAnswer(event) {
        console.log(event.target.value);
      };
    
    

    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Marginer direction="vertical" margin={50}/>
        <StepContainer>
       <StepBox stepNum="step 1" stepTitel="Determine who you want to talk to"/>
       <Marginer direction="vertical" margin={20}/>
       <QandA>
        <Title>Think about these factors: age, gender, ethnicity, class, social position</Title>
        <Title> and describe your audience </Title>
        <input className='inputChallenge' onChane={handleChangeAnswer}></input>
       </QandA>
       <Marginer direction="vertical" margin={20}/>
       <QandA>
           <Title>With your team, write down the people or groups that are directlyinvolved </Title>
        <Title>in or reached by your project </Title>
        <input className='inputChallenge' onChane={handleChangeAnswer}></input>
       </QandA>
       <Marginer direction="vertical" margin={20}/>
       <QandA>
           <Title>Think about the connections these people have with your topic. </Title>
        <Title>Who are the fans? Who are the skeptics? Who do you most need onyour side? </Title>
        <input className='inputChallenge' onChane={handleChangeAnswer}></input>
       </QandA>
       
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 2" stepTitel="check your budgate and staff"/>
       <Marginer direction="vertical" margin={50}/>
      
      <PersonaList/>

       </PageContainer>
    
}