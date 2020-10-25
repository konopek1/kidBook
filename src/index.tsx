import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';
import rootStore from './stores';

ReactDOM.render(
  <Provider {...rootStore}>
    <FirebaseContext.Provider value={new Firebase()}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
