import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';

class User extends Component {

  OnSubmit ( field, data ) => {
    console.log(field, data)
    this.props.updateProfile(field,data)
  };

  render() {
    <form>
      <label>
        <div className="formField">First Name:</div>
        <input type="text" value="Jarett" name="firstName" />
      </label>
      <input <input
        type="text"
        placeholder=""
        autoFocus="true"
        onSubmit={this.OnSubmit}
       /><br />
    </form>
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
