import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { white, cyan400 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
const logo = require('../assets/fridge-logo-white.svg');

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    logoDiv: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan400,
      paddingLeft: 18,
      height: 56,
    },
    logo: {
      height: 40,
      width: 'auto',
    },
    menuItem: {
      color: white,
      fontSize: 14,
    },
    avatar: {
      div: {
        padding: 10,
        height: 20,
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444',
      },
    },
  };

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}
    >
      <div style={styles.logoDiv}>
        <img src={logo} style={styles.logo} alt="Fridge" />
      </div>
      <div style={styles.avatar.div}>
        {/*<Avatar*/}
          {/*src="http://www.material-ui.com/images/uxceo-128.jpg"*/}
          {/*size={50}*/}
          {/*style={styles.avatar.icon}*/}
        {/*/>*/}
        {/*<span style={styles.avatar.span}>{props.username}</span>*/}
      </div>
      <div>
        {props.menus.map((menu, index) =>
          <MenuItem
            key={`menuIndex${index}`}
            style={styles.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            containerElement={<Link to={menu.link} />}
            // onTouchTap={() => {
            //   props.handleChangeRequestNavDrawer();
            // }}
          />,
        )}
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
