import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class SummaryWidget extends Component{

  static propTypes = {
    widgetID: React.PropTypes.string,
    icon: React.PropTypes.string,
    count: React.PropTypes.string,
    headerText: React.PropTypes.string,
    footerText: React.PropTypes.string,
    linkTo: React.PropTypes.string,
  };

  render() {
    return (
      <div id={this.props.widgetID} className="summary-widget col-sm-3 col-xs-6">
        <Paper className="wrapper">
          <div className="row">
            <div className="col-xs-4">
              <div className="icon">
                <i className="material-icons">{this.props.icon}</i>
              </div>
            </div>
            <div className="col-xs-8">
              <div className="count">
                {this.props.count}
              </div>
            </div>
          </div>
          <div className="row title">
            <div className="col-xs-12">
              {this.props.headerText}
            </div>
          </div>
          <Divider/>
          <div className="row footer">
            <div className="col-xs-9">
              <Link to={this.props.linkTo}>
                <div className="footer-text">
                  {this.props.footerText}
                </div>
              </Link>
            </div>
            <div className="col-xs-3">
              <Link to={this.props.linkTo}>
                <div className="footer-icon">
                  <i className="material-icons">arrow_forward</i>
                </div>
              </Link>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SummaryWidget;
