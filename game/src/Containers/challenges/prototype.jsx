import React from "react";
import styled from "styled-components";
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
width: 1000px;
margin: 0px 0px 5px 0px;
font-size: 22px;
color: black;
display: flex;
align-items: flex-start;
justify-content: flex-start;

`;

export function Prototype(){
    const [isLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        
        <Marginer direction="vertical" margin={20}/>

       <StepBox stepNum="step 1" stepTitel="Prototype to test"/>
       <Marginer direction="vertical" margin={30}/>
       <Title>
       Think about what you are trying to learn with your prototypes, and create low-resolution objects and scenarios which probe those questions.  Staying low-res allows you to pursue many different ideas you generated without committing to a direction too early on.  The objective is not simply to create a mock-up or scale model of your solution concept; it is to create experiences to which users can react.  Bring resolution to the aspects that are important for what you are trying to test, and save your efforts on other aspects.  You also need to think about the context and testing scenario you will create to get meaningful feedback.  It is not always the case that you can just hand an object to someone on the street and get real feedback. Test in the context that your solution would actually be used (or approximate the important parts of that context).  For example, if you are creating a consumer food storage system, let users test it in their kitchens at home – some of the nuanced but important issues will only emerge there. 
       </Title>
       
       <Marginer direction="vertical" margin={50}/>
       <StepContainer>
       <StepBox stepNum="step 2" stepTitel="prototype to decide"/>
       <Marginer direction="vertical" margin={20}/>
       <Title>
       Staying as low-resolution as possible, develop models of potential design candidates. Be sure to distill the design problem down to discrete elements so you can isolate and be mindful of the variable you are testing. Then try out the prototypes within your team, outsider peers, or, even better, take your prototypes to users and get their feedback
       </Title>
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 3" stepTitel="user driven prototyping"/>
       <Marginer direction="vertical" margin={20}/>
       <QandA>
           <Title>
           The approach to creating a user-driven prototype is to set up a format for your users to create something which leads to your understanding of how they are thinking.  As an example, if you were creating a website to allow users to create custom t-shirts, a traditional early-stage prototype might be a mock-up of the webpage with the features and buttons that you think might be appropriate.  A user-driven prototype could be to give your user a blank piece of paper and ask her to draw what she thinks the features should be.  You might provide a light scaffolding to get her going, such as a piece of paper with boxes in the layout of a possible website, and then ask her to create the content for those boxes.  Of course, there is an entire spectrum of how much you provide and how much you ask your user to create.  You need to find the balance, depending on your project progress, for a prototype that is scaffolded enough that the user feels that she can be generative, but open enough that you learn outside of your own biases and assumptions. 
           </Title>
       </QandA>
       <Marginer direction="vertical" margin={300}/>
       </PageContainer>
    
}