import React from 'react';
export const PAGES = [
  {
    id: 1,
    path: '/',
    Page: React.lazy(() => import('./Registration/Registration')),
  },
  {
    id: 2,
    path: '/profile',
    Page: React.lazy(() => import('./UserProfile/UserProfile')),
  },
  {
    id: 3,
    path: '/trips',
    Page: React.lazy(() => import('./Trips/Trips')),
  },
];
