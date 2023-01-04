import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios, { all } from 'axios';
import List from "../pages/List";
import Sendreq from "./Sendreq";

function Login() {
  // React States
  const [allData,setAllData] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user_logged,setuser]= useState([]);
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    
    axios('/user/list/')
    .then(response => {
    console.log("uname ",uname)
    setAllData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    const userData = allData.find((user) => user.username === uname.value);
    const dynamicStringSpan = <span> {`${userData}`} </span>
    // Compare user info
    if (userData) {
    console.log("user exists")
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setuser(userData.email)
        console.log("verified",userData)
      }
    } else {
      // Username not found
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="title">Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div >
          <input type="submit" className="button-container" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        

        {isSubmitted ? <List user={user_logged} /> : renderForm}
      </div>
    </div>
  );
}

export default Login;