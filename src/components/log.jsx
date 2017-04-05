import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
>>>>>>> fixed the login
import { loginUser } from '../actions/index.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  render() {
      const { errorMessage } = this.props

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
      loginUser(creds)
    }
  }


  function mapStateToProps(authReducer) {
    return {
      user: authReducer
    };
  }

export default connect(mapStateToProps, {loginUser})(Login);
