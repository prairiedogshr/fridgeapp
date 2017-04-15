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
        onKeyUp={(e) => {
          props.handleKeyUp(e) && (this.textInput.value = '');
        }}
        ref={(input) => {
          this.textInput = input;
        }}
      />
      <button
        onClick={() => {
          props.buttonSubmit();
          this.textInput.value = '';
        }}
      >Submit
      </button>
    </div>
  );
}
