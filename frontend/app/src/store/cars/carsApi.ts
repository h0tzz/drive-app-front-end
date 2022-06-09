import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICar } from '@shared/types';
import { baseUrl } from '../utils';

export const carsApi = createApi({
  reducerPath: 'api/cars',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: build => ({
    createCar: build.query<ICar, number>({ query: (id: number) => `/cars/${id}` }),
  }),
});

export const { useCreateCarQuery } = carsApi;
