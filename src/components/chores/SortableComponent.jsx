import React, {Component} from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

const Button = withRouter(({ history, roomies, rotateGroups, items, groups, assignGroup }) => (
  <RaisedButton
    label="Save"
    primary
    onTouchTap={() => {

      {/*rotateGroups(roomies);*/}

      let groupIndexes = [];
      groups.forEach(group => {
        let index = items.findIndex(item => {
          return item === `GROUP #${group}`;
        });
        if (index >= 0) groupIndexes.push([group, index]);
      });

      let currentGroup = null;
      items.forEach((item, ind) => {
        if (groupIndexes.length > 0) {
          if (ind === groupIndexes[0][1]) {
            currentGroup = groupIndexes[0][0];
            groupIndexes.shift();

          } else {
            assignGroup(item.chore_id, currentGroup)
              .then(result => {
              });
          }
        } else {
          assignGroup(item.chore_id, currentGroup)
            .then(result => {
            });
        }
      });
      history.push('/dashboard');
    }}
  />

));

const CancelButton = withRouter(({ history, }) => (
  <RaisedButton
    label="Cancel"
    primary
    onTouchTap={() => {
      history.push('/dashboard');
    }}
  />
));



const SortableItem = SortableElement(({value, index}) => {
  if (/GROUP #/.test(value)) return <ListItem><b>{value}</b></ListItem>
  return <ListItem>{value.chore_name}</ListItem>
});

const SortableList = SortableContainer(({items,}) => {
  // console.log(items);
  return (
    <div>
      <h3>Group Chores</h3>
      <p><u>Drag each chore under a GROUP #</u></p>
      <List>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </List>
    </div>
  );
});

export default class SortableComponent extends Component {
  state = {
    items: this.props.groups.concat(this.props.houseChores).map(item => {
      if (item.chore_name) return item;
      if (typeof item === "number") return `GROUP #${item}`;
    })
      .filter(val => {
        return val !== undefined;
      }),
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return (
      <div>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} groups={this.props.groups}/>
        <Button items={this.state.items} groups={this.props.groups} assignGroup={this.props.assignGroup} />
        <CancelButton />
      </div>
    )
  }
}
