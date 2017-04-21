import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../styles/theme-default';
import TasksDashboard from './tasksDashboardContainer';

class Tasks extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <TasksDashboard />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Tasks;
