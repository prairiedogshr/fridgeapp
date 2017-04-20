import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import Header from 'material-ui/Subheader';

export default function GroupChores(props) {
  return (
    <div>
      <Header>
        How many chore rotations would you like?
      </Header>
      <div>
        <IconButton tooltip="decrease groups" touch tooltipPosition="top-right">
          <ContentRemove
            onTouchTap={() => {
              props.decreaseGroups(props.roomies);
            }}
          />
        </IconButton>
        <span>{props.chores.groups[props.chores.groups.length - 1]}</span>
        <IconButton tooltip="increase groups" touch tooltipPosition="top-right">
          <ContentAdd
            onTouchTap={() => {
              props.increaseGroups(props.roomies);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}






