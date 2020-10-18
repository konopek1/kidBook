import React from 'react';
import { Box } from '@material-ui/core';
import BottomNavBar from '../navigation/BottomNavBar';
import MainFrame from '../navigation/MainFrame';

const AuthApp: React.FC = () => (
  <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
    <Box overflow="scroll" height="100%"><MainFrame /></Box>
    <BottomNavBar />
  </Box>
);

export default AuthApp;
