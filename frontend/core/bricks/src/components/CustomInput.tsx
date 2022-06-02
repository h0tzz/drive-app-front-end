import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, InputBase, FormControl, InputLabel } from '@mui/material';
import { COLORS } from '../variables';

type TCustomInput = {
  label?: string | undefined;
};

const StyledInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid rgba(111, 118, 126, 0.4)',
    fontSize: 16,
    padding: '18px 20px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
  },
}));

function CustomInput({ label = '', ...props }: TCustomInput): JSX.Element {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor="styled-input" sx={{ color: COLORS.neutral }}>
        {label}
      </InputLabel>
      <StyledInput id="styled-input" {...props} />
    </FormControl>
  );
}

export default CustomInput as typeof TextField;
