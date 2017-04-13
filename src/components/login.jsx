import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Register from './register.jsx';
import Log from './log.jsx'
import {  loginUser,
  logoutUser,
  registerUser,
  protectedTest,
  logOut,
} from '../actions/auth/auth'


class Auth extends Component{
  constructor(props){
    super(props);
    this.state={
      signup: false,
      login: true,
    }
  }

  componentWillMount() {
    console.log("CWM", logOut)
    this.props.logoutUser()
  }

  switch = (word) => {
    return this.setState({login: !this.state.login, signup: !this.state.signup})
  }

  render(){
    let word = this.state.signup ? "login" : "signup"
    return(
      <div>
        {this.state.signup ? <Register/> : null}
        {this.state.login ? <Log /> : null}
        <div id= "buttons">
          <p id= "loginButton" onClick = {this.switch}>{word}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authReducer }) => ({
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