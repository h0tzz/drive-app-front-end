import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import CarIcon from '../icons/CarIcon';

type THeaderPanel = {
  avatarSrc: string | undefined;
  title: string;
  justifyContent?: string;
  isNeedMargin?: boolean;
};
const HeaderPanel: React.FC<THeaderPanel> = ({
  avatarSrc,
  title,
  justifyContent = 'space-between',
  isNeedMargin = false,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={justifyContent}
      spacing={2}
      sx={{
        position: 'relative',
        width: '100%',
        mt: isNeedMargin ? -15 : 0,
      }}
    >
      <CarIcon viewBox="0 0 30 28" />
      <Typography fontWeight={500}>{title}</Typography>
      <Avatar src={avatarSrc}>N</Avatar>
    </Stack>
  );
};

export default HeaderPanel;
