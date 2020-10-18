import { Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

const VerifyMail: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Alert severity="info">Verify your email!</Alert>
  </Box>
);

export default VerifyMail;
