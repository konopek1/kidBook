import React from 'react';
import { compose } from 'recompose';
import { observer } from 'mobx-react';
import withAuthentication, { WithAuthenticationInicjetedProps } from './WithAuthentication';
import AuthApp from './AuthApp';
import NonAuthApp from './NonAuthApp';

const App: React.FC<WithAuthenticationInicjetedProps> = (props: WithAuthenticationInicjetedProps) => {
  const { isLoggedIn } = props.sessionStore;
  const component = isLoggedIn ? <AuthApp /> : <NonAuthApp />;
  return component;
};

export default compose<WithAuthenticationInicjetedProps, any>(
  withAuthentication,
  observer,
)(App);
