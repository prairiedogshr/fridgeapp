import React, { PropTypes } from 'react'
import { Component } from 'react'
import {connect } from 'react-redux'
// import actions here and then add the to mapStateToProps
import { isHomeless } from './actions'

// main react app component
class App extends Component {
  render() {
    return (
      <div>
        <h1>WAZZUP!</h1>
        <div>
          {this.props.homelessReducer[this.props.homelessReducer.length - 1]}
        </div>
        <button onClick={()=>{
          console.log('this.props: ', this.props);
          this.props.isHomeless('Rich')
          }}>click</button>
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