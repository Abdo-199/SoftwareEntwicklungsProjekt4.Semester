import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
const QandA=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`;
const Member=styled.h2`
font-weight: 900;
`;

export function BuildTeam(){
    return <PageContainer>
        <Navbar/>
        <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 1" stepTitel="Who can help you"/>
       <QandA>
           <h2>how many team members you'll need </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>When should your project start and end? </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 2" stepTitel="strength and weakness"/>
       <QandA>
           <Member>First member:</Member>
           <h2>good at: </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>not good at: </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <Member>Second member:</Member>
           <h2>good at: </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>not good at: </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 3" stepTitel="invite your team"/>
       <QandA>
           <h2>Room ID: xxx </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={300}/>
       </PageContainer>
    
}