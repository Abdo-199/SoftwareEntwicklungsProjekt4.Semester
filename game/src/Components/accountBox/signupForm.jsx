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
// import axios from 'axios'
// import { response } from "express";



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [fullName,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setCPassword] = useState("");
  

   const handleSubmit = (event) => {
     event.preventDefault();

     

    let All = {
      fullname: `${fullName}`,
      email: `${email}`,
      password: `${password}`
    }

    //axios.post('http://localhost:4000/player/acces/signup', All)
    //.then(response => console.log(response.data))
    
    // this.setState({
    //   fullName:'',
    //   email:'',
    //   password:''
    // })

    if(password===cpassword){
    console.log(All)
    }
    else{
      console.log("Passwords failed")
    };
    }

    
  return (
    <BoxContainer>
      <form onSubmit={handleSubmit}>
      <FormContainer >
        <Input type="text" placeholder="Full Name" value={fullName} maxLength="30" onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder="Email" value={email} maxLength="45" onChange={(e) => setEmail(e.target.value)} /> 
        <Input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>     
      </form>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
