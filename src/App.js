import React from 'react';
import { Provider, defaultTheme, } from '@adobe/react-spectrum';

import ProtectedRoutes from './routes';

function App() {
  return (
    // <Provider theme={defaultTheme}>
     <ProtectedRoutes/>
    // </Provider>
  );
}

export default App;
