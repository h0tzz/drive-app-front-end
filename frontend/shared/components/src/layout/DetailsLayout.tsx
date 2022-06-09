import React from 'react';
import { Box } from '@mui/material';
import { COLORS } from '../variables';
import { HeaderNav } from '../navigation';
type TDetailsHeader = {
  avatarSrc: string;
  headerPanelTitle: string;
  children: JSX.Element;
  contentAfterAvatar: JSX.Element;
};
const DetailsLayout: React.FC<TDetailsHeader> = ({
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
      }}
    >
      <HeaderNav avatarSrc={avatarSrc} title={headerPanelTitle} justifyContent={'space-around'} isNeedMargin />
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
          src={avatarSrc}
          maxHeight={{ xs: 100 }}
          maxWidth={{ xs: 100 }}
        />
        {contentAfterAvatar}
      </Box>
      {children}
    </Box>
  );
};

export default DetailsLayout;
