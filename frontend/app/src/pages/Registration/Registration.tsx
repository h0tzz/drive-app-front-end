import React from 'react';
import { Box } from '@mui/material';
import { CustomButton, GoogleIcon } from '@shared/components';
import { COLORS } from '@shared/components/src/variables';

// TODO: редиректить на глвную страницу, если юзер залогинен
const Registration: React.FC = () => {
  return (
    <Box
      sx={{
        background: COLORS.gradient.ukraine,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
        px: 2.5,
      }}
    >
      <Box
        component="img"
        alt=";0"
        src="../../assets/images/registration_logo.svg"
        maxHeight={{ xs: 145 }}
        maxWidth={{ xs: 127 }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box component="h1" sx={{ fontSize: 42, fontFamily: 'Libre Franklin', lineHeight: '39px' }}>
          Привет, <br /> я твое такси ;О
        </Box>
        <Box component="span" sx={{ color: '#6F767E', maxWidth: { xs: '75%' }, mb: 7.75 }}>
          Доска объявлений для поиска попуток в твоем городе
        </Box>
        <CustomButton startIcon={<GoogleIcon />} variant="contained" color="neutral">
          Продолжить с Google
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Registration;
