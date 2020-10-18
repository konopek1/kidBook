import { inject } from 'mobx-react';
import React from 'react';
import { compose } from 'recompose';
import Firebase, { withFirebase } from '../../Firebase';
import SessionStore from '../../stores/SessionStore';

export type WithAuthenticationInicjetedProps = {
    sessionStore: SessionStore;
    firebase: Firebase;
};

const withAuthentication = <P extends object>(Component: React.ComponentType<P & WithAuthenticationInicjetedProps>): React.ComponentType<any & WithAuthenticationInicjetedProps> => {
  class WithAuthentication extends React.Component<P & WithAuthenticationInicjetedProps> {
    private listener: any;

    constructor(props: P & WithAuthenticationInicjetedProps) {
      super(props);

      const savedUserJson = localStorage.getItem('authUser');
      const savedUser = savedUserJson !== null ? JSON.parse(savedUserJson) : null;
      this.props.sessionStore.setAuthUser(savedUser);
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser: firebase.User | null) => {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          this.props.sessionStore.setAuthUser(authUser);
        },
        () => {
          localStorage.removeItem('authUser');
          this.props.sessionStore.setAuthUser(null);
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return compose<any, any & WithAuthenticationInicjetedProps>(
    withFirebase,
    inject('sessionStore'),
  )(WithAuthentication);
};

export default withAuthentication;
