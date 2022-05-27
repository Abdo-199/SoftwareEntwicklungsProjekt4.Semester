import React from "react";
import { Marginer } from "../../Components/marginer";
import styled from "styled-components";
import { Button } from "../../Components/button";
import logo from "../../images/logo.jpg"
import { Link } from "react-router-dom";

const TopSectionContainer= styled.div`
width:100%;
height:800px;

background-color: #E3E4E6;
`;
const TopSectionInnerContainer=styled.div`
Width: 100%;
height:100%;
display:flex;

justify-content: space-evenly;
`;

const StandoutImage =  styled.div`
  width: 30em;
  height: 30em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoConatiner=styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;


`;
const Title=styled.h2`

margin: 0px 0px 0px 60px;
font-size: 1.2em;
color: black;
justify-content: space-evenly;
line-height:1.7;

`;
const SloganText =styled.h3`
margin: 0;
line-height: 1.4;
color: black;
font-weight: 500;
font-size: 45px;

`;
const SloganTextContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
const ButtonContainer=styled.div`
display: flex;
flex-direction: row;

`;


export function TopSection(props){
    return <TopSectionContainer>
        <Marginer direction="vertical" margin= {15}/>
       <LogoConatiner>
        <Title> THE</Title>
       <Title>INNOVATION</Title>
       <Title>GAME</Title>
       </LogoConatiner>
       <Marginer direction="vertical" margin= {50}/>
        <TopSectionInnerContainer>
            <SloganTextContainer>
            <Marginer direction="vertical" margin= {160}/>
                <SloganText>Spark your</SloganText>
                <SloganText>Genious</SloganText>
                <SloganText>Mind</SloganText>
                <Marginer direction="vertical" margin= {15} />
                <ButtonContainer>
                <Link to="player/access/signin">
                <Button size={18}>Log-in</Button>
                </Link>
                <Marginer direction="horizontal" margin= {15} />
                <Link to="player/access/signup">
                <Button >Sign-up</Button>
                </Link>
                </ButtonContainer>
            </SloganTextContainer>
        <StandoutImage>
            <img src={logo} alt="innovative head"/>
        </StandoutImage>
        </TopSectionInnerContainer>
    </TopSectionContainer>
}