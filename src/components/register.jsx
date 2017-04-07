import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth/auth.js';


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first:"",
      last:"",
      email:"",
      username:"",
      password:""
    }
  }
  render() {
      const { errorMessage } = this.props

      return (
        <div>
          <input type='text' ref='first' className="form-control" placeholder='FirstName'/>
          <input type='text' ref='last' className="form-control" placeholder='LastName'/>
          <input type='text' ref='email' className="form-control" placeholder='email'/>
          <input type='password' ref='password' className="form-control" placeholder='Password'/>
          <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
            Login
          </button>


        </div>
      )
    }

    handleClick = (event) => {
      const first = this.refs.first
      const last = this.refs.last
      const email = this.refs.email
      const password = this.refs.password
      const creds = { first: first.value , last: last.value, email: email.value.trim(), password: password.value.trim()}
      registerUser(creds)
    }
  }


  function mapStateToProps(authReducer) {
    return {
      auth: authReducer
    };
  }

export default connect(mapStateToProps, {registerUser})(Register);
