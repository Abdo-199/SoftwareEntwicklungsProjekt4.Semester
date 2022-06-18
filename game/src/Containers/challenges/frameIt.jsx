import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { AiOutlineCheckCircle } from "react-icons/ai";
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

export function FrameIt(){
    const [isLoggedIn,setIsLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 1" stepTitel="Answer these questions"/>
       <QandA>
           <h2>take a stab at framing it as a design question. </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>now, state the ultimate impact you're trying to have. </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>What are some possible solutions to your problem? </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>Finally, write down some of the context and constraints that you're facing </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepContainer>
       <StepBox stepNum="step 2" stepTitel="Recheck: Be honest to yourself"/>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Does it drive toward the ultimate impact?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Does it allow to a variety of solutions ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Is it still constrained ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>What about the context ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Is it narrowly scoped ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Or broadly scoped ?</h2>
       </CheckQ>
       
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 3" stepTitel="Reframe your design"/>
       <QandA>
           <h2>A tip, based on the checked boxes </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={300}/>
       </PageContainer>
    
}