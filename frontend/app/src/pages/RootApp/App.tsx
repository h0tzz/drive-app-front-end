import React from 'react';
import { Route } from 'react-router-dom';

import { ThemeProvider, RouteProvider } from '../../providers';
import { PAGES } from '../variables';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouteProvider>
        <>
          {PAGES.map(({ path, element, id }) => (
            <Route path={path} element={element} key={id} />
          ))}
        </>
      </RouteProvider>
    </ThemeProvider>
  );
};

export default App;
