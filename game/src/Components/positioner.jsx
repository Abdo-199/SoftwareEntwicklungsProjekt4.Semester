import React from "react";
import styled from "styled-components";

const Place=styled.div`
position: absolute;
  left:  ${({x})=> x?x+"px": "100px"};
  top:  ${({y})=> y?y+"px": "100px"};
`;

export function Positioner(props){
    const{x}=props;
    const {y}=props;
    return <Place x={x} y={y} > {props.children} </Place>

}