import React from "react";
import styled from "styled-components";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";


export function BuildTeam(){
    return <PageContainer>
        <Navbar/>
        <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 1" stepTitel="Invite Your Friends"/>
       <StepBox/>
       </PageContainer>
    
}