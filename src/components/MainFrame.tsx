import React from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import Chat from './Chat';
import Home from './Home';

export default class MainFrame extends React.PureComponent {
  render() {
    return (
      <Box width="100%" height="100%">
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Box>
    );
  }
}
