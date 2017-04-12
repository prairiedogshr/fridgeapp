import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Register from './register.jsx';
import Log from './log.jsx'
import {  loginUser,
  logoutUser,
  registerUser,
  protectedTest} from '../actions/auth/auth'

class Auth extends Component{
  constructor(props){
    super(props);
    this.state={
      signup:false,
      login:true
    }
  }

  componentWillMount() {
    console.log("CWM", logoutUser)
    logoutUser()
  }

  switch = (word) =>{
    var signup;
    var login;
    if(word === "signup"){signup = true; login = false;}
    else{login = true; signup= false;}
    return this.setState({login:login, signup:signup})
  }

  render(){
    var self = this;
    return(
      <div>
        <div id= "buttons">
          <p id ="signupButton" onClick ={self.switch.bind(null,"signup")}
            className={self.state.signup ? "yellow": "blue"}> Sign Up </p>
          <p id= "loginButton" onClick = {self.switch.bind(null, "login")}
            className={self.state.login ? "yellow": "blue"}>Login</p>
        </div>
        {self.state.signup?<Register/> : null}
        {self.state.login? <Log /> : null}
      </div>
    )
  }
}

const mapStateToProps = ({authReducer}) => ({
  auth: authReducer
})

export default connect(
  mapStateToProps,
  {
    loginUser,
    logoutUser,
    registerUser,
    protectedTest
  }
)(Auth)
