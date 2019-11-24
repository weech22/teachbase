import React from 'react';
import * as R from 'ramda';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../modules/login';
import { ROUTES } from '../../constants';

const AuthRouteDumb = ({ component: Component = () => null, token }) => (
  <Route
    render={() => (token ? <Component /> : <Redirect to={ROUTES.LOGIN} />)}
  />
);

const AuthRoute = connect(R.applySpec({ token: getToken }))(AuthRouteDumb);

export default AuthRoute;
