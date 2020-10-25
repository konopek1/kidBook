import firebase from 'firebase';
import { inject } from 'mobx-react';
import React from 'react';
import { compose } from 'recompose';
import Firebase, { withFirebase } from '../../Firebase';
import { User, userStoreInjected } from '../../stores/UsersStore';

export type WithUsersInicjetedProps = {
    firebase: Firebase;
} & userStoreInjected;

const withUsersList = <P extends object>(Component: React.ComponentType<P & WithUsersInicjetedProps>): React.ComponentType<any & WithUsersInicjetedProps> => {
  class WithUsersList extends React.Component<P & WithUsersInicjetedProps> {
    private listener: any;

    componentDidMount() {
      this.listener = this.props.firebase.db.users().on('value', (userData: firebase.database.DataSnapshot) => {
        if (userData) {
          const mapUsersFromObjectToList = ([uid, user]: [string, Omit<User, 'uid'>]): User => ({ ...user, uid });
          const users = (Object.entries(userData.val()) as [string, Omit<User, 'uid'>][]).map(mapUsersFromObjectToList);
          this.props.userStore.setUsers(users);
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return compose<any, any & WithUsersInicjetedProps>(
    withFirebase,
    inject('userStore'),
  )(WithUsersList);
};

export default withUsersList;
