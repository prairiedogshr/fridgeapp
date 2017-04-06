import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default function HouseInfo({ info }) {

  return (
    <div>
      <form>
        <p>Address: </p>
        <p>{info.address}</p>
      </form>
    </div>
  )
}
