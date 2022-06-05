import { createTheme } from '@mui/material';
import './theme.d';

export default createTheme({
  palette: {
    neutral: {
      main: '#FFF',
      contrastText: '#262626',
    },
    dark: {
      main: '#262626',
      contrastText: '#FFF',
    },
  },
});
