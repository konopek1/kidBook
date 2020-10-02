import { Box } from '@material-ui/core';
import React from 'react';
import MainFrameNotAuthenticated from '../navigation/MainFrameNotAuthenticated';

const NonAuthApp: React.FC = () => (
  <Box display="flex" flexWrap="wrap" flexDirection="row" height="100vh">
    <MainFrameNotAuthenticated />
  </Box>
);

export default NonAuthApp;
