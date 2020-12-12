import React from 'react';
import { Provider } from 'react-redux';

import store from './store/modules/weather/rootReducer';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Home />
      </Provider>
    </>
  );
};

export default App;
