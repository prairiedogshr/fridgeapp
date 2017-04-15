import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth/auth.js';
import { withRouter } from 'react-router-dom';
import { getAppState } from '../actions/init/init.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
      },
      paper: {
        padding: 20,
        overflow: 'auto'
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10
      },
      flatButton: {
        color: grey500
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5
        },
        labelStyle: {
          color: grey500
        },
        iconStyle: {
          color: grey500,
          borderColor: grey500,
          fill: grey500
        }
      },
      loginBtn: {
        float: 'right'
      },
      btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
      },
      btnPayPal: {
        background: '#4f81e9'
      },
      btnGoogle: {
        background: '#e14441'
      },
      btnSpan: {
        marginLeft: 5
      },
    };
  }

  handleClick = (event) => {
    event.preventDefault()

    this.props.login({
      email: document.getElementById("emailInput").value,
      password: document.getElementById("passwordInput").value
    }).then(resp => {
      if (resp) {
        console.log('found house!')
        this.props.history.push('/dashboard');
      } else {
        console.log('no house?')
        this.props.history.push('/homeless')
      }
    }).catch(err => { console.log('err: ', err)});
  }

    // const email = this.refs.email;
    // const password = this.refs.password;
    // const creds = { email: email.value.trim(), password: password.value.trim()};
    // this.props.loginUser(creds)
    //   .then(resp => {
    //     if (resp || resp === null) {
    //     // check if user has a house
    //       if (resp === null) {
    //         this.props.history.push('/homeless');
    //       } else {
    //         this.props.history.push('/dashboard');
    //       }
    //     } else {
    //       this.setState({
    //         password: ''
    //       })
    //       this.forceUpdate()
    //     }
    //   });
  

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>

        {/*<div>*/}
          {/*<input type="text" ref="email" className="form-control" placeholder="email"  />*/}
          {/*<input type="password" ref="password" className="form-control" placeholder="Password"  />*/}
          {/*<button onClick={event => this.handleClick(event)} className="btn btn-primary">*/}
            {/*Login*/}
          {/*</button>*/}
        {/*</div>*/}

        <div>
          <div style={this.styles.loginContainer}>
            <Paper style={this.styles.paper}>
              <form onSubmit={(e) => {this.handleClick(e)}}>
                <TextField id="emailInput"
                  ref="email"
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                />
                <TextField id="passwordInput"
                  ref="password"
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth={true}
                  type="password"
                />
                <div>
                  <Checkbox
                    label="Remember me"
                    style={this.styles.checkRemember.style}
                    labelStyle={this.styles.checkRemember.labelStyle}
                    iconStyle={this.styles.checkRemember.iconStyle}
                  />
                  {/*<Link to="/dashboard">*/}
                    <RaisedButton
                      label="Login"
                      primary={true}
                      style={this.styles.loginBtn}
                      type="submit"
                    />
                  {/*</Link>*/}
                </div>
              </form>
            </Paper>
            <div style={this.styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/"
                style={this.styles.flatButton}
                icon={<PersonAdd />}
              />
            </div>
            {/*<div style={this.styles.buttonsDiv}>*/}
              {/*<Link to="/" style={{...this.styles.btn, ...this.styles.btnPayPal}}>*/}
                {/*<i className="fa fa-paypal fa-lg"/>*/}
                {/*<span style={this.styles.btnSpan}>Log in with PayPal</span>*/}
              {/*</Link>*/}
              {/*<Link to="/" style={{...this.styles.btn, ...this.styles.btnGoogle}}>*/}
                {/*<i className="fa fa-google-plus fa-lg"/>*/}
                {/*<span style={this.styles.btnSpan}>Log in with Google</span>*/}
              {/*</Link>*/}
            {/*</div>*/}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({authReducer}) => {
  return {
    user: authReducer,
  };
};

export default withRouter(connect(mapStateToProps, { loginUser, getAppState })(Login));
