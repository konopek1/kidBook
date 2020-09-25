import React from 'react';
import Firebase from './FirebaseApp';

const FirebaseContext = React.createContext<Firebase>(new Firebase());

export default FirebaseContext;
