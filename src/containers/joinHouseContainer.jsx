import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { joinHouse } from '../actions/house/house'


class JoinHouse extends Component{

  constructor(props){
    super(props);
    this.state ={
      house: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    console.log("Here we are!")
    const house = this.state.house;
  }

























const mapStateToProps = ({joinHouseReducer}) => ({
  join: joinHouseReducer
});

JoinHouse.proptypes = {
  joinHouse: React.PropTypes.func;
};

export default connect(
  mapStateToProps,
  {

  }
)(JoinHouse)


























}
