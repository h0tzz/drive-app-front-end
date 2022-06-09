import React from 'react';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CalendarIcon from '../icons/CalendarIcon';

type TDatePicker = {
  date: Date | null;
  onAccept: (date: Date | null) => void;
  onChange: (date: Date | null) => void;
  withBackground?: boolean;
};
const CustomDatePicker: React.FC<TDatePicker> = ({ date, onChange, onAccept, withBackground, ...props }) => {
  return (
    <Box
      sx={{
        background: withBackground ? '#fff' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: '100%',
        maxWidth: 44,
        borderRadius: withBackground ? 2 : 0,
        border: withBackground ? 1 : 0,
        textTransform: 'none',
        fontSize: 16,
        borderColor: withBackground ? '#DCE1E6' : 'transparent',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          showToolbar={false}
          value={date}
          onAccept={onAccept}
          onChange={onChange}
          renderInput={({ inputRef, inputProps }) => (
            // @ts-ignore
            <CalendarIcon sx={{ width: '100%' }} ref={inputRef} {...inputProps} />
          )}
          {...props}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDatePicker;
