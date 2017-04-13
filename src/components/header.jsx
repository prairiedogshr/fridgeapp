import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
// const logo = require('../assets/fridge-logo-white.svg');

class Header extends Component {

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
      },
      logo: {
        height: 40,
        width: 'auto',
      },
      menuButton: {
        marginLeft: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
    };

    return (
      <div>
        <AppBar
          style={{ ...styles, ...style.appBar }}
          // title={
          //   <img src={logo} style={style.logo} alt="Fridge" />
          // }
          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white} />
            </IconButton>
          }
          iconElementRight={
            <div style={style.iconsRightContainer}>
              {/*<IconMenu*/}
                {/*color={white}*/}
                {/*iconButtonElement={*/}
                  {/*<IconButton><ViewModule color={white} /></IconButton>*/}
                {/*}*/}
                {/*targetOrigin={{ horizontal: 'right', vertical: 'top' }}*/}
                {/*anchorOrigin={{ horizontal: 'right', vertical: 'top' }}*/}
              {/*>*/}
                {/*<MenuItem key={1} primaryText="Application 1"/>*/}
                {/*<MenuItem key={2} primaryText="Application 2"/>*/}
                {/*<MenuItem key={3} primaryText="Application 3"/>*/}
              {/*</IconMenu>*/}
              <IconMenu
                color={white}
                iconButtonElement={
                  <IconButton><ExitToApp color={white} /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Logout" containerElement={<Link to="/login" />} />
              </IconMenu>
            </div>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
};

export default Header;
