import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DashCard } from "../../Components/dashCard";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Positioner } from "../../Components/positioner";
import { Shuffle } from "../../Components/shuffle";
import { socket} from "../../sockeInstance";


const Absolute=styled.div`
position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  top: 65px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 1400px;
`;
const DashContainer =styled.div`
display: flexbox;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #E3E4E6;
`;
const OutRoomID=styled.output`
background-color: #a19898;
width: 400;
height: 40px;
border-radius: 10px;
color: #fff;
`;

export function Dashboard(){
  //openSchuffle changes the state of showSchuffle=> showing the shuffle 
  const[showShuffle, setShowShuffle]=useState(false);
  const arr=['a','m','c'];
  const[toShuffle,setToShuffle]=useState(arr);
  
  const [room, setRoom] = useState("1");
  const [isLoggedIn]=useState(true);
  //onClick on the dashCard Schuffle => openSchffle is called and then setShowSchuffle invert 
  //openSchuffle can be called with three indexes => send defrent list to the shuffle component
  function openShuffle(n){
    const state1= ['immersion','analogousInspiration','PeersObservingPeers','CardSort','Interview','Collage'];
    const state2= ['Brainstorming','AttributeListing','Brainwriting','OsbornChecklist','LotusBlossomTechnique','ReverseBrainstorming'];
    const state3=['RolePlay','PaperPrototyping','CardboardPrototyping','Mockups','WireFrames']
    // eslint-disable-next-line
    if (n==1)
    {
      setToShuffle(state1);
    }
    // eslint-disable-next-line
    else if (n==2)
    {
      setToShuffle(state2);
    }
    else
    {
      setToShuffle(state3);
    }
    
    setShowShuffle(prev=>!prev);
  };
  console.log(toShuffle[1])
  // eslint-disable-next-line
  useEffect(() =>{
    socket.on("roomNo", (data) =>{
      //console.log("Angekommen an Parse Room");
      setRoom(data);
  });
  // eslint-disable-next-line
  },[socket]);
  const joinRoom = () => {
    if (room !== "") {
        socket.emit("join_room", room);
    }
  };
    return <PageContainer>
        <Navbar isLoggedIn={isLoggedIn}/>
        <DashContainer>
        <Absolute>
        <Positioner x={100} y={630} >
        <DashCard radius={80}> Get<br/> ready</DashCard>
        </Positioner>
        <Positioner x={208} y={627} >
        <Link to="/dashboard/frameit">
        <DashCard radius={80} backgroundC="2AE01F">Frame<br/>it</DashCard>
        </Link >
        </Positioner>
        <Positioner x={312} y={590} >
        <Link to="/dashboard/planit">
        <DashCard radius={90} backgroundC="2AE01F"> Plan<br/> it</DashCard>
        </Link>
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
        <Link to="/dashboard/protopersonas">
        <DashCard onclick={joinRoom}  radius={120} backgroundC="2AE01F"> Proto<br/> Personas</DashCard>
        </Link>
        </Positioner>
        <Positioner x={206} y={371} >
        <DashCard onclick={()=> openShuffle('1')} radius={120} backgroundC="E0E32A"> Shuffle</DashCard>
        </Positioner>
        <Positioner x={86} y={261} >
        <DashCard radius={140} > Define</DashCard>
        </Positioner>
        <Positioner x={226} y={161} >
        <Link to="/dashboard/updatepersonas">
        <DashCard radius={145} backgroundC="2AE01F"> Update<br/> Personas</DashCard>
        </Link>
        </Positioner>
        <Positioner x={389} y={113} >
        <Link to="/dashboard/extremepersonas">
        <DashCard radius={145} backgroundC="2AE01F"> Extreme<br/> Personas</DashCard>
        </Link>
        </Positioner>
        <Positioner x={567} y={157} >
        <Link to="/dashboard/howmightwe">
        <DashCard radius={145} backgroundC="2AE01F"> How might<br/> we</DashCard>
        </Link>
        </Positioner>
        <Positioner x={697} y={258} >
        <DashCard radius={160} > Ideate</DashCard>
        </Positioner>
        <Positioner x={848} y={371} >
        <DashCard radius={165} backgroundC="E0E32A"  onclick={()=> openShuffle('2')}> Shuffle</DashCard>
        </Positioner>
        <Positioner x={1034} y={447} >
        <Link to="/dashboard/prototype">
        <DashCard radius={180} backgroundC="2AE01F"> Prototype</DashCard>
        </Link>
        </Positioner>
        <Positioner x={1199} y={319} >
        <DashCard onclick={()=> openShuffle('3')} radius={165} backgroundC="E0E32A"> Shuffle</DashCard>
        </Positioner>
        <Positioner  >
        { showShuffle?<Shuffle showShuffle={showShuffle} preDefined={toShuffle}  />: null}
        </Positioner>
        <Positioner x={1249} y={102} >
        <DashCard radius={200} >Test</DashCard>
        </Positioner>
        <Positioner x={1100} y={100} >
        <OutRoomID placeholder="current room id"></OutRoomID>
        </Positioner>
        </Absolute>
        </DashContainer>
        </PageContainer>
}