import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar, { Brand } from 'react-bootstrap/lib/Navbar';
import Sidenav from './sidenav';

const logo = require('../assets/fridge-logo.svg');

class Header extends Component {
  render() {
    return (
      <div id="wrapper" className="content">
        <Navbar fluid={true} style={{ margin: 0 }}>
          <Brand>
            <span>
              <img src={logo} alt="Fridge" />
              <button type="button" className="navbar-toggle" onClick={() => {
                toggleMenu();}}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </span>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">
            <div className="pull-right navItem">
              <Link to="/dashboard">Home</Link>
            </div>
            <div className="pull-right navItem">
              <Link to="/login">Login</Link>
            </div>
            <div className="pull-right navItem">
              <Link to="/settings">
                <i className="fa fa-cog" />
              </Link>
            </div>
          </ul>
          <Sidenav />
        </Navbar>
      </div>
    );
  }
}

const toggleMenu = () => {
  const mobileNav = document.getElementById('sidenav');
  if (mobileNav.classList.contains('collapse')) {
    mobileNav.classList.remove('collapse');
  } else {
    mobileNav.classList.add('collapse');
  }
};

export default Header;
