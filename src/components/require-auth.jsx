import React from 'react';
import {connect} from 'react-redux'
import { withRouter, } from 'react-router-dom';



export default function(ComposedComponent){
class Authenticate extends React.Component{
  componentWillMount(){
    if(!this.props.authenticated){
      this.props.history.push('/login')
    }
  }


  render(){
    return(
      <div>
        <ComposedComponent {...this.props} />
      </div>
    );
  }
}


Authenticate.propTypes = {
  authenticated: React.PropTypes.bool.isRequired
}

Authenticate.contextTypes ={
  router:React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  return{
  authenticated : state.authReducer.authenticated
};
}

return connect(mapStateToProps)(Authenticate);
}
