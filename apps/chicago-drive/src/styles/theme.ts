import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    neutral: {
      main: '#FFF',
      contrastText: '#262626',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
