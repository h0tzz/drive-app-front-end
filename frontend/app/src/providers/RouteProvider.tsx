import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

type TRoute = {
  children: JSX.Element;
};
const RouteProvider: React.FC<TRoute> = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
