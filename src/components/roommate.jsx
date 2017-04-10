import React from 'react';
import { Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Roommate ({ roommate }) {
  return (
    <Col xs={6}>
      <Panel header={roommate.user_username}>
        <ListGroup>
          <ListGroupItem>{roommate.user_first_name}</ListGroupItem>
          <ListGroupItem>{roommate.user_last_name}</ListGroupItem>
          <ListGroupItem>{roommate.user_email}</ListGroupItem>
        </ListGroup>
      </Panel>
    </Col>
  )
}