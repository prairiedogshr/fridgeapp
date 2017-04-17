import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class NoUserAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    NoUserAlert.handleOpen = NoUserAlert.handleOpen.bind(this);
    NoUserAlert.handleClose = NoUserAlert.handleClose.bind(this);
  }

  static handleOpen() {
    this.setState({ open: true });
  }

  static handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Okay!"
        primary
        onTouchTap={NoUserAlert.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={NoUserAlert.handleClose}
        >
          Please check your username and password
        </Dialog>
      </div>
    );
  }
}
