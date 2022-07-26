import React from "react";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import avatar from "../../images/avatar.png";
import styled from "styled-components";
import { Button } from "../../Components/button";
import { Link } from "react-router-dom";

const AvatarImage =  styled.div`
  width: 200px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 70px;
  }
`;
const Hi=styled.h2`
font-size: 70px;
font-weight: 1000;

`;
const Text=styled.h2`
font-size: 50px;
font-weight: 400;
`;

export function Avatar(){
    return<PageContainer>
        <Navbar/>
        <Marginer direction="virtical" margin={30}/>
        <AvatarImage>
        <img src={avatar} alt="" />
        </AvatarImage>
        <Hi>Hi</Hi>
        <Hi>You are now a rookie</Hi>
        <Text>collect points to get an upgrade</Text>
        <Marginer direction="virtical" margin={20}/>
        <Link to={`/intergame` }>
        <Button>start</Button>
        </Link>
        <Marginer direction="virtical" margin={300}/>
    </PageContainer>

}