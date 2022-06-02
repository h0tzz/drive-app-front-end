import React from 'react';
import { Box } from '@mui/material';
import { HeaderPanel, DateFiltersPanel, COLORS, DATE_FILTERS } from '@core/bricks';

function Travels(): JSX.Element {
  const onClickDateButton = React.useCallback((filterType: typeof DATE_FILTERS[keyof typeof DATE_FILTERS]) => {}, []);
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
      <HeaderPanel avatarSrc={''} title={'Поездки'} />
      <DateFiltersPanel onClick={onClickDateButton} />
    </Box>
  );
}

export default Travels;
