import React, { Component } from 'react';
import { Link } from 'react-router';
// Drag and Drop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// Material UI
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class ReorderableList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dndConstraint: this.props.dndConstraint || (Math.random() + 1).toString(),
    };
  }

  render() {
    const { children, ...props } = this.props;
    const { dndConstraint } = this.state;
    return (
      <List {...props}>
        {React.Children.map(children, (child) => {
          if (['div', Subheader, Link].includes(child.type)) return child;
          return React.cloneElement(child, { listIdentifier: dndConstraint });
        })}
      </List>
    );
  }
}

export default DragDropContext(HTML5Backend)(ReorderableList);
