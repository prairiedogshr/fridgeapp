import React from 'react';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import IconButton from 'material-ui/IconButton';

export default function GroupChores(props) {
  return (
    <div>
      <br />
      <p>How many chore rotations would you like?</p>
      <div>
        <IconButton
          tooltip="Decrease groups"
          touch
          tooltipPosition="top-right"
          mini={true}
          backgroundColor="#aaa"
          zDepth="1"
        >
          <RemoveCircleOutline
            onTouchTap={() => {
              props.decreaseGroups(props.roomies);
            }}
          />
        </IconButton>
        <span className="group-number">{props.chores.groups[props.chores.groups.length - 1]}</span>
        <IconButton
          tooltip="Increase groups"
          touch
          tooltipPosition="top-right"
          mini={true}
          backgroundColor="#aaa"
          zDepth={1}
        >
          <AddCircleOutline
            onTouchTap={() => {
              props.increaseGroups(props.roomies);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}
