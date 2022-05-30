import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from '../styles/theme';

// modules
import Registration from './Registration/Registration';
import UserProfile from './UserProfile/UserProfile';
import { COLORS } from '../styles/consts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: COLORS.gradient.ukraine,
          height: '100%',
          py: 2.5,
          color: COLORS.main,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
