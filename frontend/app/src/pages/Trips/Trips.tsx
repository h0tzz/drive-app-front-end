import React from 'react';
import { Box } from '@mui/material';
import { CustomFab, HeaderNav, DateFiltersPanel, TripCard } from '@shared/components';
import { TFiltersPanel } from '@shared/components/src/types';
import { useGetTripsQuery } from '../../store';

const Trips: React.FC = () => {
  const { data: { data: trips = [] } = {} } = useGetTripsQuery('');
  const [calendarDate, setCalendarDate] = React.useState<Date | null>(new Date());

  const onClickFilterButton = React.useCallback((filterType: Exclude<TFiltersPanel, 'calendar'>): void => {}, []);
  const onClickFab = (): void => {};
  console.log(trips);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
      {trips.map(t => (
        <TripCard trip={t} />
      ))}
    </Box>
  );
};

export default Trips;
