import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import socketListeners from './socket';

const store = configureStore();

// Setup our socket events to dispatch
socketListeners(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:page)" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
