import React from "react";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { Navbar } from "../../Components/navbar";
import { AccountBox } from "../../Components/accountBox";
import { Marginer } from "../../Components/marginer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledInnerPageContainer= styled(InnerPageContainer)`
margin-top: 4em;
margin-bottom: 4em;
`;

export function CustomerAccessPage(props){
   const {action}= useParams()
    

    return <PageContainer>
        <Navbar/>
        
        <StyledInnerPageContainer>
        <AccountBox initialActive={action} />
        </StyledInnerPageContainer>
    </PageContainer>
}