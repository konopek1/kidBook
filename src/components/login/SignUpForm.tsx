import {
  Button, TextField, Typography,
} from '@material-ui/core';
import React, { ChangeEvent, ReactNode } from 'react';
import H from 'history';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Box from '@material-ui/core/Box/Box';
import Firebase, { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import style from './style';

type SignUpFormProps = Props & SignUpFormInjectable;

type State = {
    username: string;
    email: string;
    passwordOne: string;
    passwordTwo: string;
    error: null| firebase.auth.Error;
};

type Props = { };

export type SignUpFormInjectable = {
  firebase: Firebase,
  history: H.History
};

const INITIAL_STATE: State = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

type InputEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

class SignUpFormBase extends React.Component<SignUpFormProps, State> {
  constructor(props: SignUpFormProps) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

    onSubmit = (event: SubmitEvent) => {
      const {
        email, passwordOne,
      } = this.state;
      const { firebase } = this.props;
      firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then((authUser: firebase.auth.UserCredential) => {
          if (authUser.user) authUser.user.sendEmailVerification();

          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch((error) => {
          this.setState({ error });
        });

      event.preventDefault();
    };

    onChange = (event: InputEvent) => {
      const newState = { [event.target.name]: event.target.value } as unknown as Pick<State, keyof State>;
      this.setState(newState);
    };

    render(): ReactNode {
      const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid = passwordOne !== passwordTwo
        || passwordOne === ''
        || email === ''
        || username === '';

      return (
        <form onSubmit={this.onSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <TextField variant="outlined" style={style.input} name="username" value={username} onChange={this.onChange} type="text" placeholder="Full name" />
            <TextField variant="outlined" style={style.input} name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
            <TextField variant="outlined" style={style.input} name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password" />
            <TextField variant="outlined" style={style.input} name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Passowrd" />
            <Button disabled={isInvalid} variant="contained" style={style.input} type="submit" color="primary">Submit</Button>
            {error && <Typography color="error" align="center">{error.message}</Typography>}
          </Box>
        </form>
      );
    }
}

const SignUpForm = compose<SignUpFormProps, Props>(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpForm;
