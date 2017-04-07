import React from 'react';

export default function GroupChores(props) {
  return (
    <div>
      <h3>
        Group Chores
      </h3>
      <div>
        <button onClick={props.decreaseGroups}>-</button>
          <span>{props.chores.groups[props.chores.groups.length - 1]}</span>
        <button onClick={props.increaseGroups}>+</button>
      </div>
    </div>
  );
}
