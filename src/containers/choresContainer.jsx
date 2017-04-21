import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ChoresDashboardContainer from './choresDashboardContainer';
import CompleteChore from '../components/chores/completeChore';
import AdminChores from '../components/chores/adminChores';
import AddChore from '../components/chores/addChore';
import GroupChores from '../components/chores/groupChores';
import GroupingOfChores from '../components/chores/groupingOfChores';
import {
  addChore,
  increaseGroups,
  decreaseGroups,
  assignGroup,
  rotateGroups,
} from '../actions/chore/chore';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../styles/theme-default';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class Chores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      nextClicked: false,
      snackOpen: false,
      snackMessage: 'message default',
    }
    this.buttonSubmit = this.buttonSubmit.bind(this);

    this.styles = {
      paper: {
        padding: 16,
        overflow: 'auto'
      },
      btn: {
        marginTop: 15,
        marginBottom: 6,
      },
    };
  }



  handleKeyUp = (e) => {
    if (e.which === 13) {
      // this.props.addChore(this.state.inputField);
      // e.target.value = '';
      // this.state.inputField = '';
      this.buttonSubmit();
      return true;
    } else {
      this.state.inputField = e.target.value;
      return false;
    }
  };

  handleRequestClose = () => {
    this.setState({
      snackOpen: false,
    });
  };

  buttonSubmit () {
    if (this.state.inputField === '') {
      this.setState({snackMessage: 'Cannot leave field blank'});
      this.setState({snackOpen: true});
      return;
    }
    const today = new Date();
    const year = today.getUTCFullYear().toString();
    let month = today.getUTCMonth() + 1;
    let day = today.getUTCDate();
    if (month < 10) {
      month = `0${month}`;
    } else {
      month = month.toString();
    }
    if (day < 10) {
      day = `0${day}`;
    } else {
      day = day.toString();
    }
    const date = `${year}-${month}-${day}`;
    let chore = {
        "house_in_chore": this.props.house.house_id,
        "chore_name": this.state.inputField,
        "chore_due": date,
        "chore_group": null,
        "chore_parent": null,
        "chore_is_done": 0,
    }
    this.props.addChore(chore);
    this.setState({inputField: ''});
    this.setState({snackMessage: 'Chore Saved!'});
    this.setState({snackOpen: true});
  };

  render() {
    const complete = this.props.chores.complete;
    const incomplete = this.props.chores.incomplete;


    if (this.state.nextClicked === false) {
      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Row around="xs">

                  <Col sm={8} xs={12}>
                    <Paper style={this.styles.paper} >
                      <ChoresDashboardContainer />
                    </Paper>
                  </Col>

                  <Col sm={4} xs={12}>
                    <Paper style={this.styles.paper} >
                      <AdminChores
                        chores={this.props.chores}
                      />
                    </Paper>
                  </Col>
                  <Row between="xs" style={{"marginTop": 50}}>
                      {this.props.admin &&
                        <Col xs={12}>
                          <Row center="xs">
                            <Col lg={4}>
                              <AddChore
                                handleKeyUp={this.handleKeyUp}
                                buttonSubmit={this.buttonSubmit}
                              />
                            </Col>
                            <Col lg={8}>
                              <GroupChores
                                chores={this.props.chores}
                                increaseGroups={this.props.increaseGroups}
                                decreaseGroups={this.props.decreaseGroups}
                                roomies={this.props.house.users}
                              />
                              <RaisedButton
                                style={this.styles.btn}
                                label="Next"
                                primary
                                onTouchTap={() => {
                                  this.setState({nextClicked: true });
                                  window.scrollTo(0, 0);
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      }
                  </Row>
                </Row>
              </Col>
            </Row>
            <Snackbar
              open={this.state.snackOpen}
              message={this.state.snackMessage}
              autoHideDuration={2500}
              onRequestClose={this.handleRequestClose}
              contentStyle={{ textAlign: 'center' }}
            />
          </Grid>
        </MuiThemeProvider>
      );
    } else {
      return (
        <div>
          <GroupingOfChores
            id="top"
            chores={this.props.chores}
            assignGroup={this.props.assignGroup}
            roomies={this.props.house.users}
            rotateGroups={this.props.rotateGroups}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = ({ choresReducer, houseReducer, userReducer }) => ({
  chores: choresReducer,
  house: houseReducer,
  admin: userReducer.user_is_admin === 1,
});

export default connect(
  mapStateToProps,
  {
    addChore,
    increaseGroups,
    decreaseGroups,
    assignGroup,
    rotateGroups,
  }
)(Chores);
