import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default function HouseInfo({ info }) {

  return (
    <div>
      <form>
        <p>{info}</p>
      </form>
    </div>
  )
}
