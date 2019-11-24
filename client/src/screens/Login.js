import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { LoginForm } from '../components/login';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-tems: center;
`;

const Login = () => (
  <Wrapper>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </Wrapper>
);

export default Login;
