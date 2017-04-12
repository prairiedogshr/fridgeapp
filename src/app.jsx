import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fixed header-padding">
          <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container fullWidth">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Fridge.xyz</a>
              </div>
              <div className="collapse navbar-collapse">
                <div className="pull-right navItem">
                  <a href="#/dashboard">Home</a>
                </div>
                <div className="pull-right navItem">
                  <a href="#/login">Login</a>
                </div>
                <div className="pull-right navItem">
                  <a href="#/settings">
                    <img src="assets/vectorstash-gear.svg" height="20" width="30" alt="Settings" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
