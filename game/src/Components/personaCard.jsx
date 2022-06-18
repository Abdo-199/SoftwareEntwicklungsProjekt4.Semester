import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Marginer } from "./marginer";

const CardContainer = styled.div`
width: 300px;
height:350px ;
display: flex;
flex-direction: column;
background-color: #fff;
border-radius: 20px;
`;

const InputP=styled.input`
width: 200px;
height: ${({height}) => height ? height+"px" : "30px"};
background-color:#D5D2D2 ;
border-radius: 10px;

`;
const Text=styled.div`
font-size: 20px;
margin-left: 7px;
`;
const InputsContainer=styled.div`
width: 280px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`;
const DissContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export function PersonaCard(){
return<CardContainer>
    <Marginer direction="vertical" margin={20} />
    <InputsContainer>
    <Text>Name:</Text>
    <InputP></InputP>
    </InputsContainer>
    <InputsContainer>
    <Text>Age:</Text>
    <InputP></InputP>
    </InputsContainer>
    <InputsContainer>
    <Text>Gender:</Text>
    <InputP></InputP>
    </InputsContainer>
    <InputsContainer>
    <Text>Bio:</Text>
    <InputP height={100}></InputP>
    </InputsContainer>
    <Button backGround="#" color="#000">Submit</Button>
</CardContainer>
}