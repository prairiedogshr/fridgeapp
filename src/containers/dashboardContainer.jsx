import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ChoresDashboard from './choresDashboardContainer';
import Tasks from './tasksContainer';
import { getAppState } from '../actions/init/init';

// import actions here and then add the to mapStateToProps

// main react app component
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    this.props.getAppState()
    .then(() => {
      this.setState({
        loading: false
      })
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
        )
    } else {
    return (
        <div className="dashboardCont">

          <div><ChoresDashboard /></div>
          <div><Tasks /></div>
          <div>Dashboard</div>
          <div>Dashboard</div>
          <div>Dashboard</div>
        </div>
      )
    }
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
