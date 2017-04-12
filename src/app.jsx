import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse collapse">
            <ul className="nav in" id="side-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i className="fa fa-user-circle fa-fw" /> &nbsp;Profile
                </Link>
              </li>
              <li>
                <Link to="/house">
                  <i className="fa fa-home fa-fw" /> &nbsp;House
                </Link>
              </li>
              <li>
                <Link to="/chores">
                  <i className="fa fa-list-ol fa-fw" /> &nbsp;Chores
                </Link>
              </li>
              <li>
                <Link to="/tasks">
                  <i className="fa fa-sticky-note fa-fw" /> &nbsp;Tasks
                </Link>
              </li>
              <li>
                <Link to="/bills">
                  <i className="fa fa-credit-card fa-fw" /> &nbsp;Bills
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
