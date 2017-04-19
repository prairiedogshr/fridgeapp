import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import {List, ListItem} from 'material-ui/List';

const SortableItem = SortableElement(({value, index}) => {
  return <ListItem>{value}</ListItem>
});

const SortableList = SortableContainer(({items,}) => {
  return (
    <div>
      <h3>Group Chores</h3>
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
    items: this.props.houseChores.concat(this.props.groups).map(item => {
      if (item.chore_name) return item.chore_name;
      return item.toString();
    }),
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    console.log(oldIndex, newIndex);
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    console.log(this.state.items);
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} groups={this.props.groups}/>;
  }
}
