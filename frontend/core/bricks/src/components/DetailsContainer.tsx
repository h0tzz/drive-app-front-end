import React from 'react';
import { Box } from '@mui/material';
import { COLORS } from '../variables';
import HeaderPanel from './HeaderPanel';
type TDetailsHeader = {
  avatarSrc: string;
  headerPanelTitle: string;
  children: JSX.Element;
  contentAfterAvatar: JSX.Element;
};
const DetailsContainer: React.FC<TDetailsHeader> = ({
  children,
  contentAfterAvatar,
  headerPanelTitle,
  avatarSrc = '',
}) => {
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
      <HeaderPanel avatarSrc={avatarSrc} title={headerPanelTitle} justifyContent={'space-around'} isNeedMargin />
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
};

export default DetailsContainer;
