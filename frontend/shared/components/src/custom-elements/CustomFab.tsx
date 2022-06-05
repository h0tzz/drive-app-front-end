import React from 'react';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { COLORS } from '../variables';
import { SxProps } from '@mui/system';

type TFab = {
  onClick?: () => void;
  sx?: SxProps;
};

const CustomFab: React.FC<TFab> = ({ onClick, sx, ...props }) => {
  return (
    <Fab
      onClick={onClick}
      color="primary"
      aria-label="add"
      sx={{
        position: 'absolute',
        bottom: '35%',
        right: '10%',
        bgcolor: COLORS.lightBlue,
        ...sx,
      }}
      {...props}
    >
      <AddIcon />
    </Fab>
  );
};

export default CustomFab;
