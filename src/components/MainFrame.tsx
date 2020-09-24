import React from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import Chat from './Chat';
import Home from './Home';
import { WILDCARD, CHAT } from '../constants/routes';

export default class MainFrame extends React.PureComponent {
  render() {
    return (
      <Box width="100%">
        <Switch>
          <Route path={CHAT}>
            <Chat />
          </Route>
          <Route path={WILDCARD}>
            <Home />
          </Route>
        </Switch>
      </Box>
    );
  }
}
