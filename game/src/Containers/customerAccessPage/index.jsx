import React, { useState } from "react";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { Navbar } from "../../Components/navbar";
import { AccountBox } from "../../Components/accountBox";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledInnerPageContainer= styled(InnerPageContainer)`
margin-top: 4em;
margin-bottom: 6em;
`;

export function CustomerAccessPage(props){
   const {action}= useParams()
   const [isLoggedIn]=useState(false); 

    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        
        <StyledInnerPageContainer>
        <AccountBox initialActive={action} />
        </StyledInnerPageContainer>
    </PageContainer>
}