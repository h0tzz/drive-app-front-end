import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { componentsVariables, theme } from '@core/bricks';

// modules
import Registration from './Registration/Registration';
import UserProfile from './UserProfile/UserProfile';
import Travels from './Travels/Travels';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: componentsVariables.COLORS.gradient.ukraine,
          height: '100vh',
          py: 2.5,
          color: componentsVariables.COLORS.main,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/travels" element={<Travels />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
