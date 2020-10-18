import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import * as ROUTES from '../../constants/routes';

export default () => {
  const history = useHistory();

  return (
    <Box>
      <Box textAlign="center" marginTop="1em"><Button variant="outlined" color="secondary" onClick={() => history.push(ROUTES.SIGN_UP)}>Sign Up</Button></Box>
      <Box textAlign="center" marginTop="1em"><Button variant="outlined" color="secondary" onClick={() => history.push(ROUTES.SIGN_IN)}>Sign In</Button></Box>
    </Box>
  );
};
