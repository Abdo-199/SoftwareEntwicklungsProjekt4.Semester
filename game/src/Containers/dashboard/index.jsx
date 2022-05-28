import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DashCard } from "../../Components/dashCard";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Positioner } from "../../Components/positioner";
const DashContainer=styled.div`
width:100%;
height:800px;

background-color: #E3E4E6;
`;
const Place=styled.div`
position: absolute;
  left: 100px;
  top: 630px;
`;
const OutRoomID=styled.output`
background-color: #a19898;
width: 400;
height: 40px;
border-radius: 10px;
color: #fff;
`;

export function Dashboard(){

    return <PageContainer>
        <Navbar/>
        <DashContainer>
        <Positioner x={100} y={630} >
        <DashCard radius={80}> Get<br/> ready</DashCard>
        </Positioner>
        <Positioner x={208} y={627} >
        <DashCard radius={80} backgroundC="2AE01F">Build<br/>Team</DashCard>
        </Positioner>
        <Positioner x={312} y={590} >
        <DashCard radius={90} backgroundC="2AE01F"> Plan<br/> it</DashCard>
        </Positioner>
        <Positioner x={417} y={550} >
          <Link to="/dashboard/buildteam">
        <DashCard radius={90} backgroundC="2AE01F"> Team<br/> up</DashCard>
        </Link>
        </Positioner>
        <Positioner x={482} y={444} >
        <DashCard radius={130}> Empathize</DashCard>
        </Positioner>
        <Positioner x={352} y={408} >
        <DashCard radius={120} backgroundC="2AE01F"> Proto<br/> Personas</DashCard>
        </Positioner>
        <Positioner x={206} y={371} >
        <DashCard radius={120} backgroundC="E0E32A"> Shuffel</DashCard>
        </Positioner>
        <Positioner x={86} y={261} >
        <DashCard radius={140} > Define</DashCard>
        </Positioner>
        <Positioner x={226} y={161} >
        <DashCard radius={145} backgroundC="2AE01F"> Update<br/> Personas</DashCard>
        </Positioner>
        <Positioner x={389} y={113} >
        <DashCard radius={145} backgroundC="2AE01F"> Extreme<br/> Personas</DashCard>
        </Positioner>
        <Positioner x={567} y={157} >
        <DashCard radius={145} backgroundC="2AE01F"> How might<br/> we</DashCard>
        </Positioner>
        <Positioner x={697} y={258} >
        <DashCard radius={160} > Ideate</DashCard>
        </Positioner>
        <Positioner x={848} y={371} >
        <DashCard radius={165} backgroundC="E0E32A"> Shuffel</DashCard>
        </Positioner>
        <Positioner x={1034} y={447} >
        <DashCard radius={180} backgroundC="2AE01F"> Prototype</DashCard>
        </Positioner>
        <Positioner x={1199} y={319} >
        <DashCard radius={165} backgroundC="E0E32A"> Shuffel</DashCard>
        </Positioner>
        <Positioner x={1249} y={102} >
        <DashCard radius={200} > Test</DashCard>
        </Positioner>
        <Positioner x={1100} y={100} >
        
        <OutRoomID placeholder="current room id"></OutRoomID>
        </Positioner>
        </DashContainer>
        </PageContainer>
}