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

  handleSubmit = (e) =>{
    event.preventDefault();

    const old = this.id.oldpass.value;
    const new1 = this.id.newpassword.value;
    const new2 = this.id.newpassword2.value;
    const email = this.props.user.user_email;
    const user={"old": old, "new1": new1, "new2": new2, "email":email}
    console.log(email);
    console.log(new2);
    // if( new1 !== new2){
    //   alert("your new password fields dont match, try again");
    // }else{
    //   this.props.changePassword(user)
    //     .then((resp) => {
    //       if(resp){
    //         console.log("changed the password!");
    //         this.props.history.push('/dashboard');
    //       }else{
    //         alert("Please enter the correct original password")
    //       }
    //     });
    // }

  };

  // <div>
  //   <input type='password' ref='oldpass' className="form-control" placeholder='oldpassword'/>
  //   <input type='password' ref='newpassword' className="form-control" placeholder='newpassword'/>
  //   <input type='password' ref='newpassword2' className="form-control" placeholder='confirm new password'/>
  //   <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">
  //     change!
  //   </button>
  // </div>



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
                    <form onSubmit={event => this.handleSubmit(event)}>
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
                        label="Login"
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
