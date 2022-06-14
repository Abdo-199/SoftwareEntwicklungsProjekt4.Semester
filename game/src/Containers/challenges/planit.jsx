import React from "react";
import styled from "styled-components";
import { AnswerBox } from "../../Components/answerBox";
import { Marginer } from "../../Components/marginer";
import { Navbar } from "../../Components/navbar";
import { InnerPageContainer, PageContainer } from "../../Components/pageContainer";
import { StepBox } from "../../Components/stepBox";
import { AiOutlineCheckCircle } from "react-icons/ai";
const QandA=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`;
const StepContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`;
const Title=styled.h2`
margin: 0px 0px 0px 60px;
font-size: 20px;
color: black;
justify-content: space-evenly;

`;
const CheckQ=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 20px;
`;
const Member=styled.h2`
font-weight: 900;
`;
const CheckBox=styled.div`

font-size: 30px;
`;

export function PlanIt(){
    return <PageContainer>
        <Navbar/>
        <Marginer direction="vertical" margin={50}/>
        <StepContainer>
       <StepBox stepNum="step 1" stepTitel="Start with a calender"/>
       <CheckQ>
       <h2>Use your favorite calendar tool and mark the key dates</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Does it drive toward the ultimate impact?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Does it allow to a variety of solutions ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Is it still constrained ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>What about the context ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Is it narrowly scoped ?</h2>
       </CheckQ>
       <CheckQ>
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <h2>Or broadly scoped ?</h2>
       </CheckQ>
       
       <QandA>
           <h2>Now paste the link of this calender for your teammates here </h2>
       <AnswerBox/>
       </QandA>
       
       </StepContainer>
       <Marginer direction="vertical" margin={50}/>
       
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 2" stepTitel="check your budgate and staff"/>
       <QandA>
       <CheckQ>
          
           <CheckBox>
           <AiOutlineCheckCircle/>
           </CheckBox>
           <Marginer direction="horizontal" margin={20}/>
           <QandA>
           <Title>Do you have everything that you’ll need?</Title>
           <Title> Otherwise, write down the things you still need Check the box when you get everything</Title>
            </QandA>   
       </CheckQ>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>If you foresee constraints, how can you get arround them ? </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 3" stepTitel="get smart on your topic before you head into the field"/>
       <h2>who should you talk to know? What will you need to read to be up to speed<br/> on your challenge</h2>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 4" stepTitel="Answer these questions"/>
       <QandA>
           <h2>When should my team head into the field ? </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>Will my team make one visit or more ? </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>Will our partners be visiting ? </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>Will we need to physically make something? </h2>
       <AnswerBox/>
       </QandA>
       <QandA>
           <h2>How much time, money, and manpower will we need to produce it?  </h2>
       <AnswerBox/>
       </QandA>
       <Marginer direction="vertical" margin={50}/>
       <StepBox stepNum="step 5" stepTitel="Just keep in your mind"/>
       <Marginer direction="vertical" margin={300}/>

       </PageContainer>
    
}