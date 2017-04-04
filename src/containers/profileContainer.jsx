import React, { PropTypes } from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
// import actions here and then add the to mapStateToProps

// main react app component
class Profile extends Component {
  render() {
    return (
      <div className="centered">
        <div >
          <img className="profilePicture" src='https://avatars3.githubusercontent.com/u/21135305?v=3&s=460'/>
        </div>
        <form>
          <label>
            <div className="formField">First Name:</div>
            <input type="text" value="Jarett" name="firstName" />
          </label>
          <input type="submit" value="Submit" /><br />
          <label>
            <div className="formField">Last Name:</div>
            <input type="text" value="Engdahl" name="lastName" />
          </label>
          <input type="submit" value="Submit" /><br />
          <label>
            <div className="formField">Birthday:</div>
            <input type="text" value="07/31/95" name="birthday" />
          </label>
          <input type="submit" value="Submit" /><br />
          <label>
            <div className="formField">Phone Number:</div>
            <input type="text" value="813-464-9273"name="phone" />
          </label>
          <input type="submit" value="Submit" /><br />
        </form>
      </div>
    );
  }
}

// App.propTypes = {
//   //define destructured proptypes here
// }

// const mapDispatchToProps = dispatch => ({
//   // someKey: (someArg) => {dispatch(someFunc(someArg))}
// })

export default connect()(Profile);
// export default App;
