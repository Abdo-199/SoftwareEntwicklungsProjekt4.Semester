import React from 'react';
import styled from 'styled-components';
import {AiOutlineClose} from "react-icons/ai";
import { Flipper, Flipped } from "react-flip-toolkit";
import shuffle from "lodash.shuffle";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';

const toShuffle=[
    'immersion','analogousinspiration','cardsort','peerobservingbeers','interview','collage'
];

const Close=styled(AiOutlineClose)`
color: #000;
font-size: 32px;
`;
const ShuffleButton=styled.button`
background-color: #E0E32A;
width: 150px;
height:50px ;
border: none;
border-radius: 10px;
font-size: 30px;
cursor: pointer;
transition: all 200ms ease-in-out;
:hover{
transform: scale(1.1); 
}
`;
const ShuffleWrapper=styled.div`
width: 250px;
height: 300px;
box-shadow:0 5px 16px rgba(0,0,0,0.2);
background: #fff;
color: #000;

position: relative;
z-index: 10;
border-radius: 10px;
`;
const Box=styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;
const List=styled.ul`
 list-style-type: none;
  display: flex;
  flex-direction: column;
  
`;
const ListI=styled.li`
  margin-top: 2px;
  background-color: #0a49f6;
  border-radius: 5px;
  color: #fff;
  padding: 3px;
`;
export const Shuffle=({showShuffle,setShowShuffle})=>{
    // const[challenges,setChallenges]=useState([]);
    // const[turns,setTurns]=useState(0);
    // const shufflleChallenges=()=>{
    //     const shuffledChallenges=[...toShuffle]
    //     .sort(()=> Math.random()- 0.5)
    //     .map((challenge)=>({...challenge, id: Math.random()}))
    //     setChallenges(shuffledChallenges);
    //     //
    //     setTurns(0);
    // }
    // console.log(challenges.at(2),turns);
    const [data, setData] = useState(['collage', 'interview', 'peerobservingbeers', 'cardsort', 'analogousinspiration', 'immersion']);
    console.log(data.at(2))
  const shuffleList = () => setData(shuffle(data));
    return(<>
    {showShuffle? (
        
      <ShuffleWrapper showShuffle={showShuffle}>
       <Close onClick={console.log("clicked")}/>
       <Box>
       <Flipper flipKey={data.join("")}>
       
          <List>
        {data.map(d => (
          <Flipped key={d} flipId={d}>
            <Link to={`/dashboard/${d}` }>
            <ListI>{d}</ListI>
            </Link>
          </Flipped>
        ))}
         </List>
       </Flipper>
      <ShuffleButton onClick={shuffleList}>reshuffle</ShuffleButton> 
      </Box>       
            </ShuffleWrapper>
    ):null}
    </>)
       
    
}

