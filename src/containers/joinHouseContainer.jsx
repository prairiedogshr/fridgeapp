import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { joinHouse } from '../actions/house/house'


class JoinHouse extends Component{
  constructor(props){
    super(props);
    this.state = {
      house: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    const user = this.props.user;
    const house = parseInt(this.state.house);
    this.props.joinHouse(house, user);
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
            <input type="number" name = "house" value ={state.house} onChange={change} />
            <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">
              Submit
            </button>
      </div>
    );
  }

}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer
});

JoinHouse.proptypes = {
  joinHouse: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    joinHouse
  }
)(JoinHouse)
