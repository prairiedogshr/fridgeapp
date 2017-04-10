import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class CreateHouse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
      info: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const state = this.state;
    const change = this.handleChange;
    return (
      <div className="centered">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="address">
            *Address:
            <br />
            <input type="text" name="address" value={state.address} onChange={change} />
          </label>
          <br />
          <label htmlFor="unit">
            Unit:
            <br />
            <input type="text" name="unit" value={state.unit} onChange={change} />
          </label>
          <br />
          <label htmlFor="city">
            *City:
            <br />
            <input type="text" name="city" value={state.city} onChange={change} />
          </label>
          <br />
          <label htmlFor="state">
            *State:
            <br />
            <input type="text" name="state" value={state.state} onChange={change} />
          </label>
          <br />
          <label htmlFor="zip">
            *Zip:
            <br />
            <input type="text" name="zip" value={state.zip} onChange={change} />
          </label>
          <br />
          <label htmlFor="info">
            Info:
            <br />
            <input type="text" name="info" value={state.info} onChange={change} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default connect()(CreateHouse);
