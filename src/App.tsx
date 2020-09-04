import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import BottomNavBar from './components/BottomNavBar';
import MainFrame from './components/MainFrame';

export default class App extends React.PureComponent {
  render(): ReactNode {
    return (
      <Box display="flex" flexWrap="wrap" flexDirection="row" height="100vh">
        <MainFrame />
        <BottomNavBar />
      </Box>
    );
  }
}
