import React from 'react';
import { Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Roommate ({ info }) {
  console.log(info)
  return (
    <Col xs={6}>
      <Panel header={info}>
        <ListGroup>
          <ListGroupItem>{info}</ListGroupItem>
          <ListGroupItem>{info}</ListGroupItem>
        </ListGroup>
      </Panel>
    </Col>
  )
}