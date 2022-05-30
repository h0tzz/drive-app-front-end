import React from 'react';
import { Button } from '@mui/material';

type ButtonProps = {
  children: string | number | JSX.Element;
};
function CustomButton({ children, ...props }: ButtonProps) {
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
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton as typeof Button;
