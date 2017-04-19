import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { houseExist, joinHouse } from '../actions/house/house';
import ThemeDefault from '../styles/theme-default';

const logo = require('../assets/fridge-logo-black.svg');

class JoinHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      house: '',
    };
  }

  handleKeyUp = (e) => {
    this.state[e.target.dataset.field] = e.target.value.trim();
  };

  handleSubmit(e) {
    const user = this.state.user;
    const house = parseInt(this.state.house);

    this.props.joinHouse(house, user)
      .then((resp) => {
        if (resp) {
          console.log('updated the user!');
          this.props.history.push('/dashboard');
        }
      });
  }

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
                    <h2>Join a House</h2>
                    <TextField
                      hintText="House Code"
                      floatingLabelText="House Code"
                      fullWidth={true}
                      data-field="house"
                      onKeyUp={e => {this.handleKeyUp(e)}}
                    />
                    <RaisedButton
                      label="Join"
                      primary={true}
                      style={{ display: 'block' }}
                      onClick={(e) => this.handleSubmit(e)}
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

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

JoinHouse.proptypes = {
  joinHouse: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    houseExist,
    joinHouse
  },
)(JoinHouse);
