import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAppState } from '../actions/init/init.js';
import { loginUser, logoutUser } from '../actions/auth/auth.js';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey500 } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import TextField from 'material-ui/TextField';
import ThemeDefault from '../styles/theme-default';

import NoUserAlert from './loginNoUserAlert';

const logo = require('../assets/fridge-logo-black.svg');


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.styles = {
      logo: {
        width: 200,
        height: 'auto',
        margin: 20,
      },
      paper: {
        padding: 16,
        overflow: 'auto'
      },
      noAcctDiv: {
        textAlign: 'center',
        padding: 20
      },
      noAcctQuestion: {
        display: 'inline-block',
        position: 'relative',
        top: 4,
        margin: 10,
      },
      flatButton: {
        color: grey500
      },
      loginBtn: {
        marginTop: 15,
        marginBottom: 6,
      },
    };
  }

  componentWillMount() {
    this.props.logoutUser();
  }

  handleClick = (event) => {
    event.preventDefault();

    this.props.loginUser({
      email: document.getElementById("emailInput").value,
      password: document.getElementById("passwordInput").value
    }).then(resp => {
      if (resp === 'no user') {
        document.getElementById("emailInput").value = '';
        document.getElementById("passwordInput").value = '';
        // pop up aert for user
        NoUserAlert.handleOpen();

      } else if (resp) {
        this.props.history.push('/dashboard');
      } else {
        this.props.history.push('/welcome')
      }
    }).catch(err => { console.log('err: ', err)});
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Grid fluid>
          <NoUserAlert />
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col md={4}>
                  <img src={logo} style={this.styles.logo} alt="Fridge" />
                  <Paper style={this.styles.paper}>
                    <h2>Login</h2>
                    <form onSubmit={event => this.handleClick(event)}>
                      <TextField
                        id="emailInput"
                        hintText="E-mail"
                        floatingLabelText="E-mail"
                        fullWidth={true}
                      />
                      <TextField
                        id="passwordInput"
                        hintText="Password"
                        floatingLabelText="Password"
                        fullWidth={true}
                        type="password"
                      />
                      <div>
                        <RaisedButton
                          label="Login"
                          primary={true}
                          style={{...this.styles.loginBtn, ...this.styles.btnSpan}}
                          type="submit"
                        />
                      </div>
                    </form>
                  </Paper>
                  <div style={this.styles.noAcctDiv}>
                    <div style={this.styles.noAcctQuestion}>
                      <span>Don't have an account?</span>
                    </div>
                      <FlatButton
                        label="Sign Up"
                        href="/signup"
                        style={this.styles.flatButton}
                        icon={<PersonAdd />}
                      />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({authReducer}) => {
  return {
    user: authReducer,
  };
};

export default withRouter(connect(
  mapStateToProps, {
    loginUser,
    logoutUser,
    getAppState
  }
)(Login));
