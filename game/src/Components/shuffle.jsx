import React from 'react'
import styled from 'styled-components'
const Background=styled.div`
width: 100%;
height: 100%;
background:#E0E32A ;
position: fixed;
display:flex ;
justify-content: center;
align-items: center;
`;
const ShuffleWrapper=styled.div`
width: 250px;
height: 300px;
box-shadow:0 5px 16px rgba(0,0,0,0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;
export const Shuffle=({showShuffle,setShowShuffle})=>{
    return(<>
    {showShuffle? (
        
            <ShuffleWrapper showShuffle={showShuffle}></ShuffleWrapper>
        
    ):null}
    </>)
       
    
}