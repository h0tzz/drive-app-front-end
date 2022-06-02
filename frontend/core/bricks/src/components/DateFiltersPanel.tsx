import React from 'react';
import { Stack } from '@mui/material';
import CustomButton from './CustomButton';
import { DATE_FILTERS } from '../variables';
import CustomDatePicker from './CustomDatePicker';

type TPanel = {
  onClick: (filterType: typeof DATE_FILTERS[keyof typeof DATE_FILTERS]) => void;
  calendarDate: Date | null;
  setCalendarDate: () => void;
};
function DateFiltersPanel({ onClick, calendarDate, setCalendarDate }: TPanel): JSX.Element {
  return (
    <Stack direction={'row'} justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
      <CustomDatePicker date={calendarDate} setDate={setCalendarDate} withBackground />
      {Object.entries(DATE_FILTERS)
        .filter(([, v]) => v !== DATE_FILTERS.CALENDAR)
        .map(([k, v]) => (
          <CustomButton
            variant="contained"
            color="neutral"
            sx={{ height: 35, fontSize: 14, px: 1.25 }}
            key={k}
            onClick={() => onClick(v)}
          >
            {v}
          </CustomButton>
        ))}
    </Stack>
  );
}

export default DateFiltersPanel;
