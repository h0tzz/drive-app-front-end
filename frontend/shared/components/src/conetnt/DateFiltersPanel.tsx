import React from 'react';
import { Stack } from '@mui/material';
import { CustomButton, CustomDatePicker } from '../custom-elements';
import { DATE_FILTERS } from '../variables';
import { FiltersPanelWithoutCalendarTypes } from '../types';

type TDatePanel = {
  onButtonClick: (filterType: FiltersPanelWithoutCalendarTypes) => void;
  calendarDate: Date | null;
  onCalendarChange: (date: Date | null) => void;
  onCalendarAccept: (date: Date | null) => void;
};
const DateFiltersPanel: React.FC<TDatePanel> = ({
  onButtonClick,
  calendarDate,
  onCalendarChange,
  onCalendarAccept,
}) => {
  return (
    <Stack direction={'row'} justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
      <CustomDatePicker date={calendarDate} onChange={onCalendarChange} onAccept={onCalendarAccept} withBackground />
      {Object.entries(DATE_FILTERS)
        .filter(([, v]) => v !== DATE_FILTERS.CALENDAR)
        .map(([k, v]) => (
          <CustomButton
            variant="contained"
            color="neutral"
            sx={{ height: 35, fontSize: 14, px: 1.25 }}
            key={k}
            onClick={() => onButtonClick(v as FiltersPanelWithoutCalendarTypes)}
          >
            {v}
          </CustomButton>
        ))}
    </Stack>
  );
};

export default DateFiltersPanel;
