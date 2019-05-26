import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import SessionManager from './components/SessionManager';

const App = () => (
  <Provider store={store}>
    <SessionManager />
  </Provider>
);

export default App;
