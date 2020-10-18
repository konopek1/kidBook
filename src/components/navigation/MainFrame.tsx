import React from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import Chat from '../chat/ChooseChat';
import Home from '../posts/Home';
import * as ROUTES from '../../constants/routes';
import SignUpPage from '../login/SignUpPage';
import SignInPage from '../login/SignInPage';

export default class MainFrame extends React.PureComponent {
  render() {
    return (
      <Box width="100%" height="100%">
        <Switch>
          <Route path={ROUTES.CHAT}>
            <Chat />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignUpPage />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignInPage />
          </Route>
          <Route path={ROUTES.WILDCARD}>
            <Home />
          </Route>
        </Switch>
      </Box>
    );
  }
}
