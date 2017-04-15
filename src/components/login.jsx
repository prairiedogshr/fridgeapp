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

  switch = () => {
    return this.setState({login: !this.state.login, signup: !this.state.signup})
  }

  render(){
    let word = this.state.signup ? "signup" : "login";
    let inverse = !this.state.signup ? "signup" : "login";
    return(
      <div>
        <h2>{word}</h2>
        {this.state.signup ? <Register/> : null}
        {this.state.login ? <Log login={this.props.loginUser}/> : null}
        <div id= "buttons">
          <a href="#" onClick = {e => {e.preventDefault(); this.switch()}}>{inverse}</a>
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
