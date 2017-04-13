import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan400, grey900 } from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: cyan400,
  },
  drawer: {
    width: 230,
    color: grey900,
  },
  raisedButton: {
    primaryColor: cyan400,
  },
});

export default themeDefault;
