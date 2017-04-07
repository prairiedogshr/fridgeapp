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
          placeholder={info.house_address}
          />
          <FormControl type="text"
          placeholder={info.house_unit_number}
          />
          <FormControl type="text"
          placeholder={`${info.house_city},  ${info.state}`}
          />
          <FormControl type="text"
          placeholder={info.house_zip}
          />
          <br/>
          <ControlLabel>Info</ControlLabel>
          <FormControl type="text"
          placeholder={info.house_info}
          />
        </FormGroup>
      </form>
    </div>
  )
}
