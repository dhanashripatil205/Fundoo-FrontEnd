import React , { useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SignIn } from "../../Services/userservice";


const emailRegex = /^[A-Za-z0-9]+([.+-][A-Za-z0-9]+)*@[A-Za-z0-9]+[.][a-z]{3,}$/
const passwordRegex = /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/



export default function Login() {

const [siginObj,setSiginObj] = useState({email:'', password:''})
const [regexObj, setRegexObj] = useState({emailError:false, emailHelper:'', passwordError:false, passwordHelper:''})
// server accepts json => object , so i can send the state directly to server


  const takeEmail = (event) => {
    setSiginObj((prevState)=>({...prevState, email:event.target.value}))
    // we have to make a new obj copying the prevou Obj 
  }
  function takePassword (abc) {
   setSiginObj((prevState)=>({...prevState,password:abc.target.value}))
  } 

  const submit = async (submit) => {
    
    let emailTest = emailRegex.test(siginObj.email)
    let passwordTest = passwordRegex.test(siginObj.password)
    console.log(emailTest, passwordTest)
    
    if(emailTest === false) {
      setRegexObj((prevState)=>({...prevState,emailError:true,emailHelper:'enter correct email'}))
    } else {
      setRegexObj((prevState)=>({...prevState,emailError:false,emailHelper:''}))
    }

    if(passwordTest === false) {
      setRegexObj((prevState)=>({...prevState,passwordError:true,passwordHelper:'enter correct password'}))
    } else {
      setRegexObj((prevState)=>({...prevState,passwordError:false,passwordHelper:''}))
    }

    //heating the server
    if(emailTest === true && passwordTest === true) {
      let response = await SignIn(siginObj)  //SignIn from services axios
      console.log(response)
    }
  }


  return (
    <div className="maincontainer">
      <div className="google">Google</div>
      <div className="signin">Sign in</div>
      <div className="gmail">to continue to Gmail</div>

<div className="bothinputfield">

      <div className="emailorphone">
        <TextField className="textfield1" error={regexObj.emailError}  helperText={regexObj.emailHelper} onChange={takeEmail} id="outlined-basic"  label="Email or phone" type="search" />
      </div>
      <div className="password">
        <TextField className="textfield2" error={regexObj.passwordError}  helperText={regexObj.passwordHelper} onChange={takePassword} id="outlined-basic"  label="password" type="search" />
      </div>
</div>


      <div className="paragraph">
        <p>
          Not your computer? Use Guest mode to sign in privately. 
        </p>
        <p className="learn">Learn more</p>
      </div>

      <div className="createaccount">
        <div>Create account</div>

        <div>
          <Button variant="contained" onClick= {submit}>Next</Button>
        </div>
      </div>
    </div>
  );
}
