import React from 'react';
import { Button } from '@mui/material';
import { SxProps } from '@mui/system';

type TButton = {
  children: string | number;
  sx?: SxProps;
};
const CustomButton: React.FC<TButton> = ({ children, sx, ...props }) => {
  return (
    <Button
      sx={{
        height: 48,
        boxShadow: 0,
        borderRadius: 2,
        border: 1,
        textTransform: 'none',
        fontSize: 16,
        borderColor: '#DCE1E6',
        '&:hover': {
          boxShadow: 0,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton as typeof Button;
