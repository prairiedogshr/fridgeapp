import React from 'react';

export default function GroupChores(props) {
  return (
    <div>
      <h3>
        Group Chores
      </h3>
      <div>
        <button onClick={props.decreaseGroups}>Decrease</button>
        {props.chores.groups}
        <button onClick={props.increaseGroups}>Increase</button>
      </div>
    </div>
  );
}
