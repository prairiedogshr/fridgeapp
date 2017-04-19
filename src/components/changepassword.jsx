import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getAppState } from '../actions/init/init';
import { changePassword } from '../actions/profile/profile';

class Change extends Component {
  constructor(props){
    super(props);
    this.state ={
      user_password: '',
      user_newpass: ''
    }
  }

  handleOnChange = (e) => {
    this.state.profile[e.target.dataset.field] = e.target.value.trim();
  };

  handleSubmit = (e) =>{
    const old = this.refs.oldpass.value;
    const new1 = this.refs.newpassword.value;
    const new2 = this.refs.newpassword2.value;
    const email = this.props.user.user_email;
    const user={"old": old, "new1": new1, "new2": new2, "email":email}
    console.log("USER", user)
    if( new1 !== new2){
    }else{
      this.props.changePassword(user)
    }

  };

  render(){
    return(
      <div>
        <input type='password' ref='oldpass' className="form-control" placeholder='oldpassword'/>
        <input type='password' ref='newpassword' className="form-control" placeholder='newpassword'/>
        <input type='password' ref='newpassword2' className="form-control" placeholder='confirm new password'/>
        <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">
          change!
        </button>
      </div>
    )
  }
}

Change.propTypes = {
  changePassword: React.PropTypes.func,
}


const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    changePassword
  }
)(Change);
