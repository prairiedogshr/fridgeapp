import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { joinHouse } from '../actions/house/house'


class JoinHouse extends Component{
  constructor(props){
    super(props);
    this.state ={
      house: ''
    };
    console.log("this.props", this.props.user)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    const house = this.state.house;
  }

  render(){
    const state = this.state;
    const change = this.handleChange;
    return(
      <div className = "centered">
          <label htmlFor = "house code">
            *Enter the House Code:
            <br/>
            </label>
            <input type="text" name = "house" value ={state.house} onChange={change} />
            <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">
              Submit
            </button>
      </div>
    );
  }

}

const mapStateToProps = ({joinHouseReducer}) => ({
  join: joinHouseReducer
});

JoinHouse.proptypes = {
  joinHouse: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    joinHouse,
  }
)(JoinHouse)
