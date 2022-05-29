import React from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Marginer } from "../../Components/marginer";
const InnerCont=styled.div`
width: 100%;
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
//justify-content: center;
`;
const InputFeld=styled.input`
height: 96px;
width: 1193px;
background-color: #fff;
color: black;
border-radius: 10px;

`;

export function TestPage(){
return<PageContainer>
    <Navbar/>
    
    <InnerCont>
    <Marginer direction="virtical" margin= {15} />
    <h2>Test</h2>
    <Marginer direction="virtical" margin= {15} />
    
    <InputFeld placeholder="write a message"></InputFeld>
    <Marginer direction="virtical" margin= {15} />
    <button>Test</button>
    </InnerCont>
</PageContainer>

}