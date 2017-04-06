import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Field from '../components/user.jsx';
import { updateProfile } from '../actions';

class User extends Component {
  render() {
    return (
      <div className="centered">
        <Field field={'First Name: '} data={'Jarett'} />
        <Field field={'Last Name: '} data={'Engdahl'} />
        <Field field={'Phone Number: '} data={'813-464-9273'} />
        <Field field={'Birthday: '} data={'07/31/1995'} />
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
