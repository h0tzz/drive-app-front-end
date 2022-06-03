import React from 'react';
import { Box } from '@mui/material';
import { HeaderPanel, DateFiltersPanel, componentsVariables, componentsTypes } from '@core/bricks';

const Travels: React.FC = () => {
  const [calendarDate, setCalendarDate] = React.useState<Date | null>(new Date());

  const onClickFilterButton = React.useCallback(
    (filterType: Exclude<componentsTypes.TDatePanelFilters, 'calendar'>): void => {},
    []
  );

  return (
    <Box
      sx={{
        background: componentsVariables.COLORS.gradient.ukraine,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        px: 2.5,
      }}
    >
      <HeaderPanel avatarSrc={''} title={'Поездки'} />
      <DateFiltersPanel
        onButtonClick={onClickFilterButton}
        calendarDate={calendarDate}
        onCalendarChange={setCalendarDate}
        onCalendarAccept={setCalendarDate}
      />
    </Box>
  );
};

export default Travels;
