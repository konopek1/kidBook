import app, { auth } from 'firebase';
import Database from './Database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export default class FirebaseApp {
  public auth: auth.Auth;

  public db: Database;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = new Database(app.database());
  }

  public doCreateUserWithEmailAndPassword(email: string, password: string)
    : Promise<auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  public doSignWithEmailAndPassword(email: string, password: string): Promise<auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public doSignOut() {
    this.auth.signOut();
  }

  public doPasswordReset(email: string) {
    this.auth.sendPasswordResetEmail(email);
  }

  public doPasswordUpdate(password: string) {
    if (this.auth.currentUser) {
      this.auth.currentUser.updatePassword(password);
    }
  }
}
