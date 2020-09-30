import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import * as ROUTES from '../../constants/routes';
import SignInForm from './SignInForm';

const SignInLink: React.FC = () => {
  const history = useHistory();
  return (
    <Typography color="primary">
      Doesn&apos;t have acount yet?
      <br />
      <Box textAlign="center" marginTop="1em"><Button variant="outlined" color="secondary" onClick={() => history.push(ROUTES.SIGN_UP)}>Sign Up</Button></Box>
    </Typography>
  );
};

const SignInPage: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%">
    <SignInForm />
    <SignInLink />
  </Box>
);

export default SignInPage;
