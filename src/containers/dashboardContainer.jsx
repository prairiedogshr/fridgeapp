import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Paper from 'material-ui/Paper';

import { getAppState } from '../actions/init/init';
import SummaryWidget from '../components/summaryWidget';
import RoommateWidget from '../components/roommateWidget';
import ChoresDashboard from './choresDashboardContainer';
import TasksDashboard from './tasksDashboardContainer';
import ExpensesGraph from '../components/expenses/expensesGraphRechart';
import ThemeDefault from '../styles/theme-default';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.style = {
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    this.props.getAppState()
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <RefreshIndicator
          size={200}
          left={-100}
          top={200}
          loadingColor="#26c6da"
          status="loading"
          style={{ marginLeft: '50%' }}
        />
      );
    }
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="container-fluid">
          <div className="row">
            <div className="summary-widget col-sm-3 col-xs-6">
              <SummaryWidget
                widgetID="chores"
                icon="assignment"
                count={this.props.chores.incomplete.length}
                headerText="Chores to Do"
                linkTo="/chores"
                footerText="Get to Work"
              />
            </div>
            <div className="summary-widget col-sm-3 col-xs-6">
              <SummaryWidget
                widgetID="tasks"
                icon="feedback"
                count={this.props.tasks.incomplete.length}
                headerText="Tasks Left"
                linkTo="/tasks"
                footerText="See All Tasks"
              />
            </div>
            <div className="summary-widget col-sm-3 col-xs-12">
              <SummaryWidget
                widgetID="bills"
                icon="credit_card"
                count={this.props.expenses.currentMonth.length}
                headerText="Bills this Month"
                linkTo="/bills"
                footerText="Pay Your Bills"
              />
            </div>
            <div className="summary-widget col-sm-3 col-xs-12">
              <RoommateWidget
                widgetID="house"
                icon="group"
                headerText="Roommates"
                linkTo="/house"
                footerText="See Details"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ChoresDashboard />
            </div>
            <div className="col-md-4">
              <TasksDashboard />
            </div>
            <div className="col-md-4">
              <Paper className="paper-wrapper">
                <ExpensesGraph
                  roommates={this.props.house.users.length}
                  expenses={this.props.expenses}
                />
              </Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ choresReducer, tasksReducer, expensesReducer, houseReducer }) => ({
  chores: choresReducer,
  tasks: tasksReducer,
  expenses: expensesReducer,
  house: houseReducer,
});

export default connect(
  mapStateToProps,
  {
    getAppState,
  },
)(Dashboard);
