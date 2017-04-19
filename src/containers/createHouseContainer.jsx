import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { createHouse } from '../actions/house/house';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ThemeDefault from '../styles/theme-default';

const logo = require('../assets/fridge-logo-black.svg');

class CreateHouse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
      info: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    this.props.createHouse(this.state)
      .then((resp) => {
        if (resp) {
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
                    <ValidatorForm onSubmit={e => {this.handleSubmit(e)}} >
                      <h2>Create a House</h2>
                      <TextValidator
                        hintText="Address"
                        floatingLabelText="Address"
                        fullWidth={true}
                        name="address"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.address}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      />
                      <TextField
                        hintText="Unit"
                        floatingLabelText="Unit"
                        fullWidth={true}
                        name="unit"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.unit}
                      />
                      <TextValidator
                        hintText="City"
                        floatingLabelText="City"
                        fullWidth={true}
                        name="city"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.city}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      />
                      <TextValidator
                        hintText="State"
                        floatingLabelText="State"
                        fullWidth={true}
                        name="state"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.state}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      />
                      <TextValidator
                        hintText="Zip Code"
                        floatingLabelText="Zip Code"
                        fullWidth={true}
                        name="zip"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.zip}
                        validators={['required', 'isNumber']}
                        errorMessages={['this field is required', 'zip is invalid']}
                      />
                      <TextField
                        hintText="Any important info about your house"
                        floatingLabelText="Info"
                        fullWidth={true}
                        name="info"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.info}
                      />
                      <RaisedButton
                        label="Sign Up"
                        primary={true}
                        type="submit"
                        style={{ marginTop: 15 }}
                      />
                    </ValidatorForm>
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

const mapStateToProps = ({ createHouseReducer }) => ({
  create: createHouseReducer,
});

CreateHouse.propTypes = {
  createHouse: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    createHouse,
  },
)(CreateHouse);
