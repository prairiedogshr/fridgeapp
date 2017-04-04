import React from 'react';

export default function AddChore(props) {
  return (
    <div>
      <h3>
        Add Chore
      </h3>
      <input
        type="text"
        placeholder=""
        autoFocus="true"
        onKeyDown={props.handleSubmit}
      />
    </div>
  );
}
