import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile, submitProfile } from '../actions/profile/profile';
import axios from 'axios';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import ThemeDefault from '../styles/theme-default';

class Form extends Component {

  OnSubmit(field, data) {
    this.refs.newData.placeholder = this.refs.newData.value;
    // "/api/users/1"
  }

  // componentWillMount() {
  //   axios.get('/api/users/1')
  //   .then(data => {
  //     //console.log(data)
  //     this.setState(data)
  //     console.log("STATE",this.state)
  //   })
  // }

  render() {
    console.log(this.props);
    return (
      <form>
        <label>
          <div className="formField">{this.props.field}</div>
        </label><br />
        <input
          className={this.props.dbField}
          ref="newData"
          type="text"
          placeholder={this.props.data}
          autoFocus="true"
        />
        <button
          className={this.props.dbField}
          onClick={() => {
            this.OnSubmit(this.props.submitProfile(
              this.props.dbField,
              this.refs.newData.value,
              this.props.user.user_id,
            ));
          }}
          type="Submit"
        >
          Edit
        </button>
        <br />
      </form>);
  }
}

Form.propTypes = {
  submitProfile: React.PropTypes.func,
  profileSubmit: React.PropTypes.func,
  OnSubmit: React.PropTypes.func,
  updateProfile: React.PropTypes.func,
  field: React.PropTypes.string,
  data: React.PropTypes.string,
  dbField: React.PropTypes.string,
};

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    submitProfile,
    updateProfile,
  },
)(Form);
