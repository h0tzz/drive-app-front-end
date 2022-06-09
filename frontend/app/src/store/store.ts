import { configureStore } from '@reduxjs/toolkit';
import { usersApi, carsApi, tripsApi } from './index';
import tripsReducer from './trips/tripsSlice';
import { useDispatch } from 'react-redux';

const apiList = [usersApi, carsApi, tripsApi];

export const store = configureStore({
  reducer: {
    ...apiList.reduce((acc, { reducerPath, reducer }) => {
      return { ...acc, [reducerPath]: reducer };
    }, {}),
    tripsReducer,
  },
  // @ts-ignore
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), ...apiList.map(({ middleware }) => middleware)],
  devTools: process.env.NODE_ENV !== 'production',
});

export type TypeRootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
