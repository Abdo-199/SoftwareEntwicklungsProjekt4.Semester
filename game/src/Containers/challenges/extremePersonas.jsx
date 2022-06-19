import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import {PageContainer } from "../../Components/pageContainer";
import PersonaList from "../../Components/personas/personaslist";
import { StepBox } from "../../Components/stepBox";
const Title=styled.h2`
width: 1000px;
margin: 0px 0px 10px 0px;
font-size: 20px;
color: black;
justify-content: space-evenly;
padding-bottom: 5px;
`;
const Member=styled.h2`
font-weight: 900;
`;
export function ExtremePersonas(){
    const [isLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar   isLoggedIn={isLoggedIn}/>
        <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 1" stepTitel="WHY engage with extreme users"/>
       <Marginer direction="vertical" margin={30}/>
       <Title>Designers engage with users (people!) to understand their needs and gain insights about their lives.</Title>
        <Title>  We also draw inspiration from their work-arounds and frameworks. </Title>
        <Title> When you speak with and observe extreme users, the needs are amplified </Title>
        <Title>and their work-arounds are often more notable.  This helps you pull out meaningful needs </Title>
        <Title>that may not pop when engaging with the middle of the bell curve. </Title>
        <Title> However, the needs that are uncovered through extreme users are often also needs of a wider population.  </Title>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 2" stepTitel="HOW to engage extreme users"/>
       <Marginer direction="vertical" margin={30}/>
       <Member>Determine who’s extreme:</Member>
       <Title>Determining who is an extreme user starts with considering what aspect of your design challenge you want to explore to an extreme.List a number of facets to explore within your design space.  Then think of people who may be extreme in those facets.For example, if you are redesigning the grocery store shopping experience you might consider the following aspects: how groceries are gathered, how payment is made, how purchase choices are made, how people get their groceries home, etc. Then to consider the aspect of gathering groceries, for example, you might talk to professional shoppers, someone who uses a shopping cart to gather recyclables (and thus overloads the cart), product pullers for online buyers, people who bring their kids shopping with them, or someone who doesn’t go to grocery stores. Engage  Observe and interview your extreme user as you would other folks.  Look for work-arounds (or other extreme behaviors) that can serve as inspiration and uncover insights. Look at the extreme in all of usLook to extreme users for inspiration and to spur wild ideas.  Then work to understand what resonates with the primary users you are designing for. </Title>
       <Marginer direction="vertical" margin={50}/>
       <PersonaList/>

       <Marginer direction="vertical" margin={300}/>
       </PageContainer>
    
}