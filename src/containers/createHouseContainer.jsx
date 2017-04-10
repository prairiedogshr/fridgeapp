import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createHouse } from '../actions/house/house';

class CreateHouse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: undefined,
      unit: undefined,
      city: undefined,
      state: undefined,
      zip: undefined,
      info: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // console.log('Ayyo');
    // console.log(createHouse);
    const a = this.state.address;
    const c = this.state.city;
    const s = this.state.state;
    const z = this.state.zip;

    event.preventDefault();
    if (a && c && s && z) {
      console.log('ok');
      this.props.createHouse(this.state);
    } else {
      console.log('enter all fields');
    }
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

const mapStateToProps = ({ createHouseReducer }) => ({
  create: createHouseReducer,
});

CreateHouse.propTypes = {
  createHouse: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    createHouse,
  },
)(CreateHouse);
