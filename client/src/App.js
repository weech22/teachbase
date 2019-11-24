import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';

import { Root as RootNavigator } from './navigators';
import configureStore from './configureStore';

const Wrapper = styled.div`
  background: linear-gradient(to right, #8e9eab, #eef2f3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <Provider store={configureStore}>
      <Router>
        <>
          <RootNavigator />
        </>
      </Router>
    </Provider>
  </Wrapper>
);

export default App;
