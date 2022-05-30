import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import CarIcon from './icons/CarIcon';

type HeaderPanelType = {
  avatarSrc: string | undefined;
};

function HeaderPanel({ avatarSrc }: HeaderPanelType): JSX.Element {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        mt: -15,
      }}
    >
      <CarIcon viewBox="0 0 30 28" />
      <Typography fontWeight={500}>Личный профиль</Typography>
      <Avatar src={avatarSrc}>N</Avatar>
    </Stack>
  );
}

export default HeaderPanel;
