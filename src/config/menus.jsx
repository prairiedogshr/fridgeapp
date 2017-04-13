import React from 'react';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import Assignment from 'material-ui/svg-icons/action/assignment';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Home from 'material-ui/svg-icons/action/home';
import Announcement from 'material-ui/svg-icons/action/announcement';

// import {cyan600, pink600, purple600} from 'material-ui/styles/colors';

const menus = {
  sideMenu: [
    { text: 'DashBoard', icon: <Dashboard />, link: '/dashboard' },
    { text: 'Profile', icon: <AccountBox />, link: '/profile' },
    { text: 'House', icon: <Home />, link: '/house' },
    { text: 'Chores', icon: <Assignment />, link: '/chores' },
    { text: 'Tasks', icon: <Announcement />, link: '/tasks' },
    { text: 'Bills', icon: <CreditCard />, link: '/bills' },
  ],
};

export default menus;
