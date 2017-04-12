import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth/auth.js';
import { withRouter } from 'react-router-dom';
import { getAppState } from '../actions/init/init.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  render() {

      return (
        <div>
          <input type='text' ref='email' className="form-control" placeholder='email'/>
          <input type='password' ref='password' className="form-control" placeholder='Password'/>
          <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
            Login
          </button>


        </div>
      )
    }

    handleClick = (event) => {
      const email = this.refs.email
      const password = this.refs.password
      const creds = { email: email.value.trim(), password: password.value.trim()}
      this.props.loginUser(creds)
      .then(resp => {
        console.log('in here with')
        if (resp) {
        this.props.history.push('/dashboard')
      } else {
        console.log('didnt work')
        this.setState({
          password: ''
        })
        this.forceUpdate()
      }
    })
  }
}


  function mapStateToProps(authReducer) {
    return {
      user: authReducer
    };
  }

export default withRouter(connect(mapStateToProps, {loginUser, getAppState})(Login));
