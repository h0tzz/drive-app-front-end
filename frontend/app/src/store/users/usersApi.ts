import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUser, IUserInfo } from '@shared/types';
import { baseUrl } from '../utils';

export const usersApi = createApi({
  reducerPath: 'api/users',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Users'],
  endpoints: build => ({
    getUser: build.query<IUser, number>({ query: (id: number) => `/users/${id}` }),
    updateUser: build.mutation<IUser, Partial<IUser> & Pick<IUserInfo, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = usersApi;
