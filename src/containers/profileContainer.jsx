import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Field from '../components/user';
import { updateProfile } from '../actions/profile/profile';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentWillMount() {
    axios.get('/api/users/1')
    .then((data) => {
      // this.setState({
      //   data
      //   // loaded: true
      // })
      this.setState(data);
      this.state.loaded = true;
      this.forceUpdate();
    });
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="centered">
          <Field dbField={'user_first_name'} field={'First Name: '} data={this.state.data.user_first_name} />
          <Field dbField={'user_last_name'} field={'Last Name: '} data={this.state.data.user_last_name} />
          <Field dbField={'user_email'} field={'Email: '} data={this.state.data.user_email} />
          <Field dbField={'user_phone'} field={'Phone Number: '} data={this.state.data.user_phone} />
          <Field dbField={'user_birthday'} field={'Birthday: '} data={this.state.data.user_birthday} />
          <Field dbField={'user_info'} field={'Info: '} data={this.state.data.user_data} />
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
