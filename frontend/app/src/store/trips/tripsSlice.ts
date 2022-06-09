import { createSlice } from '@reduxjs/toolkit';
import { ITripsCollection } from '@shared/types';
import { tripsApi } from './tripsApi';

// TODO: типизировать слайс когда бекенд будет готов
const initialState: ITripsCollection = {
  data: [],
  meta: { count: 0 },
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(tripsApi.endpoints.getTrips.matchFulfilled, (state, action) => {
      const { data, meta } = action.payload;
      // @ts-ignore
      state.data = data;
      state.meta = meta;
    });
  },
});

export default tripsSlice.reducer;
