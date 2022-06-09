import React from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { COLORS } from '@shared/components/src/variables';
import theme from '@shared/components/src/theme';

type Theme = {
  children: JSX.Element;
};

const ThemeProvider: React.FC<Theme> = ({ children }) => {
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: COLORS.gradient.ukraine,
          height: '100vh',
          p: 2.5,
          color: COLORS.main,
        }}
      >
        {children}
      </Box>
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;
