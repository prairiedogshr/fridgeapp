import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Field from '../components/user';
import { updateProfile } from '../actions/profile/profile';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
    };
  }
  render() {
    console.log(this.props)
    if (this.state.loaded === true) {
      return (
        <div className="centered">
          <Field dbField={'user_first_name'} field={'First Name: '} data={this.props.user.user_first_name} />
          <Field dbField={'user_last_name'} field={'Last Name: '} data={this.props.user.user_last_name} />
          <Field dbField={'user_email'} field={'Email: '} data={this.props.user.user_email} />
          <Field dbField={'user_phone'} field={'Phone Number: '} data={this.props.user.user_phone} />
          <Field dbField={'user_birthday'} field={'Birthday: '} data={this.props.user.user_birthday} />
          <Field dbField={'user_info'} field={'Info: '} data={this.props.user.user_data} />
        </div>
      );
    }
    return (
      <div>
        <h1>LOADING</h1>
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
