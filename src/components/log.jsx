import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth/auth.js';
import { withRouter, Link } from 'react-router-dom';
import { getAppState } from '../actions/init/init.js';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import TextField from 'material-ui/TextField';
import ThemeDefault from '../styles/theme-default';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.styles = {
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
        background: '#009cde'
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

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col md={4}>
                  <Paper style={this.styles.paper}>
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
                  <div style={this.styles.buttonsDiv}>
                    <Link to="/" style={{...this.styles.btn, ...this.styles.btnPayPal}}>
                      <i className="fa fa-paypal fa-lg"/>
                      <span style={this.styles.btnSpan}>Log in with PayPal</span>
                    </Link>
                    <Link to="/" style={{...this.styles.btn, ...this.styles.btnGoogle}}>
                      <i className="fa fa-google-plus fa-lg"/>
                      <span style={this.styles.btnSpan}>Log in with Google</span>
                    </Link>
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

export default withRouter(connect(mapStateToProps, { loginUser, getAppState })(Login));
