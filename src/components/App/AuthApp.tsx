import React from 'react';
import { Box } from '@material-ui/core';
import BottomNavBar from '../navigation/BottomNavBar';
import MainFrame from '../navigation/MainFrame';

const AuthApp: React.FC = () => (
  <Box display="flex" flexWrap="wrap" flexDirection="row" height="100vh">
    <MainFrame />
    <BottomNavBar />
  </Box>
);

export default AuthApp;
