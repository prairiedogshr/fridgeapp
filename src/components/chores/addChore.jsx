import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default function AddChore(props) {
  return (
    <div>
      <TextField
        id="addChoreInput"
        hintText="Chore description"
        floatingLabelText="Add Chore"
        fullWidth={false}
        onKeyUp={(e) => {
          props.handleKeyUp(e) && (document.getElementById('addChoreInput').value = '');
        }}
      />
      <RaisedButton
        label="Submit"
        primary={true}
        onClick={() => {
          props.buttonSubmit();
          document.getElementById('addChoreInput').value = '';
        }}
      />
    </div>
  );
}
