import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Loader from 'react-loader-spinner';

import { ROUTES } from '../constants';
import {
  getIsInitializing,
  startInitialize as _startInitialize,
  getToken,
} from '../modules/login';
import { NavigationService } from '../services';
import { AuthRoute } from '../components/router-extensions';
import { Login, Home } from '../screens';

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const StyledLoader = styled(Loader)`
  margin: auto;
`;

const RootDump = ({ history, startInitialize, isInitializing, token }) => {
  useEffect(() => {
    startInitialize();
    NavigationService.setHistory(history);
  }, [history, startInitialize]);

  return isInitializing ? (
    <LoaderContainer>
      <StyledLoader
        type="Audio"
        color="#fff"
        height={100}
        width={100}
        timeout={3000}
      />
    </LoaderContainer>
  ) : (
    <>
      <Switch>
        {token && <Redirect exact from="/login" to="/home" />}
        <Redirect exact from="/" to="/login" />
        <Route path={ROUTES.LOGIN} component={Login} />
        <AuthRoute exact path={ROUTES.HOME} component={Home} />
      </Switch>
    </>
  );
};

const Root = R.compose(
  withRouter,
  connect(R.applySpec({ isInitializing: getIsInitializing, token: getToken }), {
    startInitialize: _startInitialize,
  }),
)(RootDump);

export default Root;
