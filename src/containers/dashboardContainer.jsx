import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ChoresDashboard from './choresDashboardContainer';
import TasksDashboard from './tasksDashboardContainer';
import { getAppState } from '../actions/init/init';
import RefreshIndicator from 'material-ui/RefreshIndicator';

// import actions here and then add the to mapStateToProps

// main react app component
class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.style = {
      refresh: {
        display: 'inline-block',
        position: 'relative',
      }
    };

    this.state = {
      loading: true
    }
  };

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
        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor="#FF9800"
          status="loading"
          style={this.style.refresh}
          />      
        )
    } else {
    return (
        <div className="dashboardCont">
          <div>
            <ChoresDashboard />
          </div>
          <div>
            <TasksDashboard />
          </div>
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
