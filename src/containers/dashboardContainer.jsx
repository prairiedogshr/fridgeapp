import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ChoresDashboard from './choresDashboardContainer';
import Tasks from './tasksContainer';
import { getAppState } from '../actions/init/init';

// import actions here and then add the to mapStateToProps

// main react app component
class Dashboard extends Component {

  componentWillMount() {
    console.log('dashboard will mount', this.props);
    this.props.getAppState();
  }
  render() {
    return (
      <div className="dashboardCont">

        <div><ChoresDashboard /></div>
        <div><Tasks /></div>
        <div>Dashboard</div>
        <div>Dashboard</div>
        <div>Dashboard</div>
      </div>
    );
  }
}

// App.propTypes = {
//   define destructured proptypes here
// };

// const mapDispatchToProps = dispatch => ({
//   someKey: (someArg) => {dispatch(someFunc(someArg))}
// })

export default connect(null, { getAppState })(Dashboard);
// export default App;
