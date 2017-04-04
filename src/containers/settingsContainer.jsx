import React from 'react';
import { connect } from 'react-redux';

const Settings = (props) => {
  // access other reducers with:
    // props.user.something
    // props.house.something

  return (
    <div>
      <h3>This is the settings page</h3>
      {props.settings.setting1.toString()}
    </div>
  );
};

const mapStateToProps = ({ settingsReducer }) => ({
  settings: settingsReducer,
  // user: userReducer,
  // house: houseReducer,
});

// insert houseReducer actions and userReducer actions here
export default connect(
  mapStateToProps,
  {

  },
)(Settings);
