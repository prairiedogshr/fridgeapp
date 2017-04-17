import React, { Component } from 'react';
import { connect } from 'react-redux';
import { houseExist } from '../actions/house/house';
import { joinHouse } from '../actions/house/house';


class JoinHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const user = this.props;
    const house = parseInt(this.state.house);
    console.log("USER", user)
    console.log("House", house)
    this.props.joinHouse(house,user).then(resp =>{
      if(resp){
        console.log("updated the user!");
        this.props.history.push('/profile');
      }
    })

  }

  render() {
    const state = this.state;
    const change = this.handleChange;
    return (
      <div className="centered">
        <label htmlFor="house code">
          *Enter the House Code:
          <br />
        </label>
        <input type="number" name="house" value={state.house} onChange={change}/>
        <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

JoinHouse.proptypes = {
  joinHouse: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    houseExist,
    joinHouse
  },
)(JoinHouse);
