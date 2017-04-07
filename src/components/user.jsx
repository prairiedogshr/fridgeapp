import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions/profile/profile.js';

class Form extends Component {

  OnSubmit(field, data) {
    console.log(field, data);
    this.props.updateProfile(field, data);
    this.refs.newData.placeholder = this.refs.newData.value;
  }
  render() {
    return (
      <form>
        <label>
          <div className="formField">{this.props.field}</div>
        </label>
        <input
          ref="newData"
          type="text"
          placeholder={this.props.data}
          autoFocus="true"
        />
        <button onClick={() => {
          this.OnSubmit(this.props.field, this.refs.newData.value);
        }} type="Submit"
        >Submit
        </button>
        <br />
      </form>
    );
  }
}

Form.propTypes = {
  OnSubmit: React.PropTypes.func,
  updateProfile: React.PropTypes.func,
  field: React.PropTypes.string,
  data: React.PropTypes.string,
};

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    updateProfile,
  },
)(Form);
