import React, { PropTypes } from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';

class User extends Component {

  OnSubmit = ( field, data ) => {
    console.log(field, data)
    this.props.updateProfile(field,data)
  };

  render() {
    return <form>
      <label>
        <div className="formField">First Name:</div>
        <input type="text"
        placeholder=""
        autoFocus="true"
        onSubmit={this.OnSubmit} />
      </label>
      <inpu/><br />
    </form>
  }
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    updateProfile,
  },
)(User);

// App.propTypes = {
//   //define destructured proptypes here
// }

// const mapDispatchToProps = dispatch => ({
//   // someKey: (someArg) => {dispatch(someFunc(someArg))}
// })


// export default App;
