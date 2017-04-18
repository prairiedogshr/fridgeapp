import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ThemeDefault from '../styles/theme-default';

const logo = require('../assets/fridge-logo-black.svg');

class Welcome extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col md={4}>
                  <img src={logo} style={{ width: 200, height: 'auto', margin: 20 }} alt="Fridge" />
                  <Paper style={{ padding: 20 }}>
                    <h1>Welcome!</h1>
                    <RaisedButton
                      href="/joinhouse"
                      label="Join a House"
                      primary={true}
                      style={{ display: 'block', marginBottom: 20 }}
                    />
                    <RaisedButton
                      href="/createhouse"
                      label="Create a House"
                      primary={true}
                      style={{ display: 'block' }}
                    />
                  </Paper>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default connect()(Welcome);
