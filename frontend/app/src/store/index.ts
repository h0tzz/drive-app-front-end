import { usersApi, useGetUserQuery, useUpdateUserMutation } from './users/usersApi';
import { carsApi, useCreateCarQuery } from './cars/carsApi';
import { tripsApi, useGetTripsQuery } from './trips/tripsApi';
import { store, TypeRootState, useAppDispatch } from './store';

export {
  usersApi,
  useGetUserQuery,
  useUpdateUserMutation,
  carsApi,
  useCreateCarQuery,
  tripsApi,
  useGetTripsQuery,
  useAppDispatch,
};
export type { TypeRootState };
export default store;
