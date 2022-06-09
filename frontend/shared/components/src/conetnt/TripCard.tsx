import React from 'react';
import { Box, Stack } from '@mui/material';
import { ITripInfo } from '@shared/types';

interface ITripCard {
  trip: ITripInfo;
}

const TripCard: React.FC<ITripCard> = ({ trip }) => {
  return (
    <Box
      sx={{
        bc: '#fff',
        borderRadius: 20,
        px: 2.5,
        py: 3.125,
      }}
    >
      <Box>
        <Stack direction="row" alignItems="center"></Stack>
      </Box>
    </Box>
  );
};

export default TripCard;
