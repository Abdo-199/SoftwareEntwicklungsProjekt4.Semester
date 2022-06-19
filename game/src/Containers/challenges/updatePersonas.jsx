import React from "react";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { useState } from "react";
import PersonaList from "../../Components/personas/personaslist";


export function UpdatePersonas(){
    const [isLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 1" stepTitel="update it"/>
       <Marginer direction="vertical" margin={50}/>
      <h2>Now after you have empathized with your Personas,<br/>
      update the bio of each one</h2>
      <Marginer direction="vertical" margin={50}/>
      <PersonaList/>

       </PageContainer>
    
}