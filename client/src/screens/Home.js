import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { LogoutButton } from '../components/home';
import { logout as _logout } from '../modules/login';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeDumb = ({ logout }) => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Main>
      Home
      <LogoutButton onClick={logout} />
    </Main>
  </>
);

const Home = connect(null, { logout: _logout })(HomeDumb);

export default Home;
