import React from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import * as ROUTES from '../../constants/routes';
import SignUpPage from '../login/SignUpPage';
import SignInPage from '../login/SignInPage';
import AboutPage from './AboutPage';
import VerifyMail from './VerifyMail';

export default class MainFrameNotAuthenticated extends React.PureComponent {
  render() {
    return (
      <Box width="100%">
        <Switch>
          <Route path={ROUTES.SIGN_UP}>
            <SignUpPage />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignInPage />
          </Route>
          <Route path={ROUTES.VERIFY_EMAIL}>
            <VerifyMail />
          </Route>
          <Route path={ROUTES.WILDCARD}>
            <AboutPage />
          </Route>
        </Switch>
      </Box>
    );
  }
}
