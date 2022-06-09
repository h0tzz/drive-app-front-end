import React from 'react';
import { Route } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, RouteProvider } from '../../providers';
import { PAGES } from '../variables';
import store from '../../store';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <RouteProvider>
          <>
            {PAGES.map(({ path, Page, id }) => (
              <Route path={path} element={<React.Suspense>{<Page />}</React.Suspense>} key={id} />
            ))}
          </>
        </RouteProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
