import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from '../styles/theme';

//modules
import Registration from './Registration/Registration';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed disableGutters>
        <Box
          sx={{
            background: 'linear-gradient(#18C8FF 0%, #FFFEE0 70%)',
            height: '100vh',
            px: 2.5,
            pt: 2.5,
            pb: 11.25,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Registration />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
