import React from 'react';
import { Box } from '@mui/material';
import { COLORS } from '../styles/consts';
import HeaderPanel from './HeaderPanel';
type TDetailsHeader = {
  avatarSrc: string;
  children: JSX.Element;
  contentAfterAvatar: JSX.Element;
};
function DetailsContainer({ children, contentAfterAvatar, avatarSrc = '' }: TDetailsHeader): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: COLORS.white,
        position: 'relative',
        height: '100%',
        borderTopRightRadius: '250% 160px',
        borderTopLeftRadius: '250% 160px',
        mt: 15,
        px: 2.5,
      }}
    >
      <HeaderPanel avatarSrc={avatarSrc} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: 25,
            width: 100,
            height: 100,
            zIndex: 1,
            mt: 3.75,
          }}
          component="img"
          alt="avatar"
          src="../../images/black_square.png"
          maxHeight={{ xs: 100 }}
          maxWidth={{ xs: 100 }}
        />
        {contentAfterAvatar}
      </Box>
      {children}
    </Box>
  );
}

export default DetailsContainer;