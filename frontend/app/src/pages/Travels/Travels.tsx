import React from 'react';
import { Box } from '@mui/material';
import { CustomFab, HeaderNav, DateFiltersPanel } from '@shared/components';
import { COLORS } from '@shared/components/src/variables';
import { FiltersPanelTypes } from '@shared/components/src/types';

const Travels: React.FC = () => {
  const [calendarDate, setCalendarDate] = React.useState<Date | null>(new Date());

  const onClickFilterButton = React.useCallback((filterType: Exclude<FiltersPanelTypes, 'calendar'>): void => {}, []);
  const onClickFab = (): void => {};

  return (
    <Box
      sx={{
        background: COLORS.gradient.ukraine,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        px: 2.5,
      }}
    >
      <CustomFab onClick={onClickFab} />
      <HeaderNav avatarSrc={''} title={'Поездки'} />
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
