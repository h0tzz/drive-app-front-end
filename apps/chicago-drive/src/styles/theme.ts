import { createTheme } from '@mui/material';

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

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    dark: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    dark: true;
  }
}
