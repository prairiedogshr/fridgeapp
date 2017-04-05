import React from 'react';

export default function AddTask(props) {
  return (
    <div>
      <h3>
        Add Task
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
