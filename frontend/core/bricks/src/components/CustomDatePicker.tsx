import React from 'react';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CalendarIcon from '../icons/CalendarIcon';

type TDatePicker = {
  date: Date | string | null;
  setDate: (date: Date | null | string) => void;
  withBackground?: boolean;
};

function CustomDatePicker({ date, setDate, withBackground, ...props }: TDatePicker): JSX.Element {
  const [value, setValue] = React.useState<Date | null>(new Date());

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          showToolbar={false}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={({ inputRef, inputProps }) => <CalendarIcon ref={inputRef} {...inputProps} />}
          {...props}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default CustomDatePicker;
