import React from 'react';
import Firebase from './FirebaseApp';

const FirebaseContext = React.createContext<Firebase>(null as unknown as Firebase);

export type firebaseProps = {firebase: Firebase};
type withFirebaseProps<P> = P & firebaseProps;

export const withFirebase = <P extends object>(Component: React.ComponentType<withFirebaseProps<P>>) => (props: any): JSX.Element => (
  <FirebaseContext.Consumer>
    {(firebase: Firebase) => {
      const newProps = { firebase, ...props } as withFirebaseProps<P>;
      return (<Component {...newProps} />);
    }}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
