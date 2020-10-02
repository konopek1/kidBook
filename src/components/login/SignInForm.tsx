import {
  Button, TextField, Typography,
} from '@material-ui/core';
import React, { ChangeEvent, ReactNode } from 'react';
import H from 'history';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Box from '@material-ui/core/Box/Box';
import { inject } from 'mobx-react';
import Firebase, { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import style from './style';
import SessionStore from '../../stores/SessionStore';

type Props = {

};

type State = {
    email: string;
    password: string;
    error: any;
};

export type SignInFormInjectable = {
    firebase: Firebase,
    history: H.History
};

export type SignInFormProps = SignInFormBase & SignInFormInjectable;

const INITIAL_STATE: State = {
  email: '',
  password: '',
  error: null,
};

  type InputEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
  type SubmitEvent = React.FormEvent<HTMLFormElement>;

class SignInFormBase extends React.Component<SignInFormProps, State> {
  constructor(props: SignInFormProps) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

      onSubmit = (event: SubmitEvent) => {
        const {
          email, password,
        } = this.state;

        this.props.firebase
          .doSignWithEmailAndPassword(email, password)
          .then((authUser: firebase.auth.UserCredential) => {
            if (!authUser.user?.emailVerified) return this.setState({ error: { message: 'Please verify your email.' } });

            this.setState({ ...INITIAL_STATE });
            return this.props.history.push(ROUTES.HOME);
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
          email,
          password,
          error,
        } = this.state;

        const isInvalid = password === '' || email === '';

        return (
          <form onSubmit={this.onSubmit}>
            <Box display="flex" flexDirection="column" alignItems="center" width="100%">
              <TextField variant="outlined" style={style.input} name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
              <TextField variant="outlined" style={style.input} name="password" value={password} onChange={this.onChange} type="password" placeholder="Password" />
              <Button disabled={isInvalid} variant="contained" style={style.input} type="submit" color="primary">Submit</Button>
              {error && <Typography color="error" align="center">{error.message}</Typography>}
            </Box>
          </form>
        );
      }
}

const SignInForm = compose<SignInFormProps, Props>(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInForm;
