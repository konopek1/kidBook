import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import * as ROUTES from '../../constants/routes';
import SignUpForm from './SignUpForm';

const SignUpLink: React.FC = () => {
  const history = useHistory();
  return (
    <Typography color="primary">
      Already have an account?
      <br />
      <Box textAlign="center" marginTop="1em"><Button variant="outlined" color="secondary" onClick={() => history.push(ROUTES.SIGN_IN)}>Sign In</Button></Box>
    </Typography>
  );
};

const SignUpPage: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%">
    <SignUpForm />
    <SignUpLink />
  </Box>
);

export default SignUpPage;
