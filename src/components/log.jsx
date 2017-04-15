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
    );
  }
}

const mapStateToProps = ({authReducer}) => {
  return {
    user: authReducer,
  };
};

export default withRouter(connect(mapStateToProps, { loginUser, getAppState })(Login));
