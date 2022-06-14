import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




 
export function LoginForm(props) {
  
  const { switchToSignup } = useContext(AccountContext);


  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

   let loginAll = {
     email: `${email}`,
     password: `${password}`
   }


   const resT = await axios.post('http://localhost:4000/login', loginAll);
     
     if (resT.data.token !== undefined && resT.status === 200) {
      localStorage.setItem("token", resT.data.token);
      setIsLoggedIn(true);  
      navigate('/intergame');    
     };
  }
 

  return (
    <BoxContainer>
       <form onSubmit={onSubmit}>
      <FormContainer>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      </form>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}