import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Header from 'material-ui/Subheader';

export default function GroupChores(props) {
  return (
    <div>
      <br />
      <p>How many chore rotations would you like?</p>
      <div>
        <FloatingActionButton
          tooltip="decrese groups"
          touch
          tooltipPosition="top-right"
          mini={true}
          backgroundColor="#aaa"
          zDepth="1"
        >
          <ContentRemove
            onTouchTap={() => {
              props.decreaseGroups(props.roomies);
            }}
          />
        </FloatingActionButton>
        <span className="group-number">{props.chores.groups[props.chores.groups.length - 1]}</span>
        <FloatingActionButton
          tooltip="increase groups"
          touch
          tooltipPosition="top-right"
          mini={true}
          backgroundColor="#aaa"
          zDepth="1"
        >
          <ContentAdd
            onTouchTap={() => {
              props.increaseGroups(props.roomies);
            }}
          />
        </FloatingActionButton>
      </div>
    </div>
  );
}
