import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ControlLabel, FormControl, FormGroup, InputGroup } from 'react-bootstrap'

export default function HouseInfo({ info }) {

  return (
    <div>
      <form>
        <FormGroup controlId="houseInfo" onBlur={() => {
          console.log('hey!!')
        }}>
          <ControlLabel>Address</ControlLabel>
          <FormControl type="text"
          placeholder={info.address}
          />
          <FormControl type="text"
          placeholder={info.unit_number}
          />
          <FormControl type="text"
          placeholder={`${info.city},  ${info.state}`}
          />
          <FormControl type="text"
          placeholder={info.zip}
          />
          <br/>
          <ControlLabel>Info</ControlLabel>
          <FormControl type="text"
          placeholder={info.info}
          />
        </FormGroup>
      </form>
    </div>
  )
}
