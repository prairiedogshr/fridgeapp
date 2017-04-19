import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { submitProfile } from '../actions/profile/profile';
// import axios from 'axios';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import ThemeDefault from '../styles/theme-default';

class Form extends Component {

  OnSubmit(field, data) {
    this.refs.newData.placeholder = this.refs.newData.value;
    // "/api/users/1"
  }

  // componentWillMount() {
  //   axios.get('/api/users/1')
  //   .then(data => {
  //     this.setState(data)
  //   })
  // }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col md={6}>
                <Paper>
                  <form>
                    <TextField
                      hintText={this.props.data}
                      floatingLabelText={this.props.data}
                      fullWidth={true}
                      className={this.props.dbField}
                      ref="newData"
                      autoFocus="true"
                    />
                    <RaisedButton
                      label="Update"
                      primary={true}
                      className={this.props.dbField}
                      onClick={() => {
                        this.OnSubmit(this.props.submitProfile(
                          this.props.dbField,
                          this.refs.newData.value,
                          this.props.user.user_id,
                        ));
                      }}
                      type="Submit"
                    />
                  </form>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Form.propTypes = {
  submitProfile: React.PropTypes.func,
  profileSubmit: React.PropTypes.func,
  OnSubmit: React.PropTypes.func,
  field: React.PropTypes.string,
  data: React.PropTypes.string,
  dbField: React.PropTypes.string,
};

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    submitProfile,
  },
)(Form);
