import React from "react";
import { useState } from "react";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
export function Cardsort(){
    const [isLoggedIn,setIsLoggedIn]=useState(true); 
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        <h2>This challenge is not implemented yet</h2>
       </PageContainer>
    
}