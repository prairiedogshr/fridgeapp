import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Field from '../components/user.jsx';
import { updateProfile } from '../actions/profile/profile';

class User extends Component {
  render() {
    return (
      <div className="centered">
        <Field dbField={'user_first_name'} field={'First Name: '} data={'Jarett'} />
        <Field dbField={'user_last_name'} field={'Last Name: '} data={'Engdahl'} />
        <Field dbField={'user_email'} field={'Email: '} data={'jaretten@gmail.com'} />
        <Field dbField={'user_phone'} field={'Phone Number: '} data={'813-464-9273'} />
        <Field dbField={'user_birthday'} field={'Birthday: '} data={'07/31/1995'} />
        <Field dbField={'user_info'} field={'Info: '} data={'this is where you would add a description of yourself'} />
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    updateProfile,
  },
)(User);
