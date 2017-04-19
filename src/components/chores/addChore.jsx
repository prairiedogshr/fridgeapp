import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default function AddChore(props) {
  return (
    <div>
      <TextField
        id="addChoreInput"
        hintText="chore description"
        floatingLabelText="Add Chore"
        fullWidth={false}
        onKeyUp={(e) => {
          props.handleKeyUp(e) && (document.getElementById('addChoreInput').value = '');
        }}
      />
      <FlatButton
        label="Submit"
        primary
        onClick={() => {
          props.buttonSubmit();
          document.getElementById('addChoreInput').value = '';
        }}
      />
    </div>
  );
}
