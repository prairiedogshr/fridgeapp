import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ControlLabel, FormControl, FormGroup, InputGroup } from 'react-bootstrap'

export default function HouseInfo({ info, update, handleSubmit, state }) {
  console.log('state? ', state)
  return (
    <div>
      <form>
        <FormGroup controlId="houseInfo" onBlur={(e) => {
          console.log('hey!! ', e.target.id, ' ', e.target.value);
          update({
            key: e.target.id, 
            value: e.target.value
          })
        }}>
        <ControlLabel>Address</ControlLabel>
        <FormControl  id="house_address" onClick={(e) => {}} type="text"
        defaultValue={state.info.address} placeholder="Street Address"
        />
        <FormControl id="house_unit_number" type="text"
        defaultValue={state.info.unit_number} placeholder = "Unit Number"
        />
        <FormControl id="house_city" type="text"
        defaultValue={state.info.city} placeholder = "City"
        />
        <FormControl id="house_state" type="text"
        defaultValue={state.info.state} placeholder = "State"
        />
        <FormControl id="house_zip" type="text"
        defaultValue={state.info.zip} placeholder = "Zipcode"
        />
        <br/>
        <ControlLabel>Info</ControlLabel>
        <FormControl id="house_info" type="text"
        defaultValue={state.info.info} placeholder = "House Info"
        />
        </FormGroup>
      </form>
    </div>
  )
};
  






