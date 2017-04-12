import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div id="page-wrapper">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
