import { createMuiTheme } from '@material-ui/core';
import { teal, brown, pink, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      dark: blue[600],
      light: blue[200],
      contrastText: blue[50],
    },
    secondary: {
      main: pink[600],
      dark: pink[700],
      light: pink[300],
      contrastText: pink[50],
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.68)',
      secondary: 'rgba(0, 0, 0, 0.50)',
      disabled: 'rgba(0, 0, 0, 0.34)',
      hint: 'rgba(0, 0, 0, 0.30)',
    },
  },
  status: {
    danger: teal[400],
    info: brown[800],
  },
});

export default theme;
