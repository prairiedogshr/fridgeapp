import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getAppState } from '../actions/init/init';
import { changePassword } from '../actions/profile/profile';
import { Grid, Row, Col } from 'react-flexbox-grid';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ThemeDefault from '../styles/theme-default';



class Change extends Component {
  constructor(props){
    super(props);
    this.state ={
      user_password: '',
      user_newpass: ''
    };


  this.styles = {
    paper: {
      padding: 16,
      overflow: 'auto'
    },
    btn: {
      marginTop: 15,
      marginBottom: 6,
    },
    loadContainer: {
      position: 'relative',
    },
    loadRefresh: {
      display: 'inline-block',
      position: 'relative',
      },
    };
  }

  handleOnChange = (e) => {
    this.state.profile[e.target.dataset.field] = e.target.value.trim();
  };

  handleClick = (event) =>{
    event.preventDefault();

    const old = document.getElementById("oldpass").value;
    const new1 = document.getElementById("newpassword").value
    const new2 = document.getElementById("newpassword2").value
    const email = this.props.user.user_email;
    const user={"old": old, "new1": new1, "new2": new2, "email":email}
    if( new1 !== new2){
      alert("Your new password fields dont match, try again");
    }else if((old === new1) || (old === new2)){
      alert("Your old password cant be your new one.")
    }else{
      this.props.changePassword(user)
        .then((resp) => {
          if(resp){
            alert("changed the password!");

          }else{
            alert("Please enter the correct original password")
          }
        });
    }
  };




  render(){
    return(
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Row center = "xs">
                <Col md ={4}>
                  <Paper style = {this.styles.paper}>
                    <h2>Change password</h2>
                    <form onSubmit={event => this.handleClick(event)}>
                      <TextField
                        id="oldpass"
                        floatingLabelText = "Old Password"
                        fullWidth={true}

                        type = "password"
                      />
                      <TextField
                        id = "newpassword"
                        floatingLabelText = "New Password"
                        fullWidth={true}

                        type = "password"
                      />
                      <TextField
                        id="newpassword2"
                        floatingLabelText = "New Password"
                        fullWidth={true}
                        type = "password"
                      />
                      <RaisedButton
                        label="Change"
                        primary={true}
                        style={{...this.styles.loginBtn, ...this.styles.btnSpan}}
                        type="submit"
                      />
                    </form>
                  </Paper>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
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
