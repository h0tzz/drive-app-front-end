import React from 'react';
import { RegistrationPage, TravelsPage, UserProfilePage } from './index';

export const PAGES = [
  {
    id: 1,
    path: '/',
    element: <RegistrationPage />,
  },
  {
    id: 2,
    path: '/profile',
    element: <UserProfilePage />,
  },
  {
    id: 3,
    path: '/travels',
    element: <TravelsPage />,
  },
];
