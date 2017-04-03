import React, { PropTypes } from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
// import actions here and then add the to mapStateToProps
import { isHomeless } from './actions'
import Chores from './components/chores.jsx';
import Login from './components/login.jsx';

// main react app component
class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

// App.propTypes = {
//   //define destructured proptypes here
// }

const mapStateToProps = state => ({
  homelessReducer: state.homelessReducer
})

// const mapDispatchToProps = dispatch => ({
//   // someKey: (someArg) => {dispatch(someFunc(someArg))}
// })

export default connect(
  mapStateToProps,
  {
    isHomeless
  }
)(App)
// export default App;
