import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, } from 'react-router-dom';
import { registerUser } from '../actions/auth/auth.js';
import axios from 'axios';


const CompleteRegistration = ({ handleRegistration, handleKeyUp, }) => {
  return (
    <div>
      <input data-field="user_first_name" type="text" className="form-control" placeholder="FirstName"  onKeyUp={e => { handleKeyUp(e) }} />
      <input data-field="user_last_name" type="text" className="form-control" placeholder="LastName" onKeyUp={e => { handleKeyUp(e) }} />
      <input data-field="user_username" type="text" className="form-control" placeholder="username" onKeyUp={e => { handleKeyUp(e) }} />
      <input data-field="user_phone" type="text" className="form-control" placeholder="phone" onKeyUp={e => { handleKeyUp(e) }} />
      <button onClick={e => handleRegistration(e)} className="btn btn-primary">
        SignUp!
      </button>
    </div>
  );
}


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: {
        user_phone: '',
        user_username: '',
        user_first_name: '',
        user_last_name: '',
        user_email: '',
        user_password: '',
      },
      complete_signup: false,
    };
  }

  handleClick = (event) => {
    axios.get(`/api/users/exists/${this.refs.email.value.trim()}`)
      .then(response => {
        if (response.data === true) {
          alert('user already exists!');
        } else {
          let creds = this.state.creds;
          creds.user_email = this.refs.email.value.trim();
          creds.user_password = this.refs.password.value.trim();

          this.setState({complete_signup: true});
          this.props.history.push('/profile')
        }
      });
  }

  handleRegistration = (e) => {
    this.props.registerUser(this.state.creds)
      .then(response => {
        if (response === true) {
          return this.props.history.push('/homeless');
        }
      });
  }

  handleKeyUp = (e) => {
    console.log(e.target.dataset.field);
    let field = e.target.dataset.field;
    this.state.creds[field] = e.target.value;
  };

  render() {
    if (!this.state.complete_signup) {
      return (
        <div>
          <input type="text" ref="email" className="form-control" placeholder="email"  />
          <input type="password" ref="password" className="form-control" placeholder="Password"  />
          <button onClick={event => this.handleClick(event)} className="btn btn-primary">
            Next
          </button>
        </div>
      );
    }
    return (
      <div>
        <CompleteRegistration handleRegistration={this.handleRegistration} handleKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}


function mapStateToProps(authReducer) {
  return {
    auth: authReducer,
  };
}

export default withRouter(connect(mapStateToProps,
  {
    registerUser,
  }
)(Register));
