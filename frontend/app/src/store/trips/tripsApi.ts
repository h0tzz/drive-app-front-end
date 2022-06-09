import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITripsCollection } from '@shared/types';
import { baseUrl } from '../utils';
import { tripsMock } from '../../mock';

export const tripsApi = createApi({
  reducerPath: 'api/trips',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: build => ({
    getTrips: build.query<ITripsCollection, unknown>({
      query: () => '/trips',
      // @ts-ignore
      transformResponse: () => tripsMock,
    }),
  }),
});

export const { useGetTripsQuery } = tripsApi;
