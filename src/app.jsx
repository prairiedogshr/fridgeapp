import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from './styles/theme-default';
import menus from './config/menus';
import Header from './components/header';
import LeftDrawer from './components/leftdrawer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    };
    this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  // handleClose() {
  //   this.setState({
  //     navDrawerOpen: !this.state.navDrawerOpen,
  //   });
  // }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0,
      },
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div
          onTouchTap={(e) => {
            console.log(e.target.classList);
            if (this.state.navDrawerOpen && !e.target.classList.contains('LeftDrawer')) {
              this.handleChangeRequestNavDrawer();
            }
          }}
        >
          <Header
            styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
          />
          <LeftDrawer
            navDrawerOpen={navDrawerOpen}
            menus={menus.sideMenu}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
            className={'LeftDrawer'}
            // username="Rich"
          />
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
};

export default withWidth()(App);
