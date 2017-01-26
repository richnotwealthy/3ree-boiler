import rootReducer from '../reducers';
import {createStore} from 'redux';

export default (initialState) => {
  var store = createStore(rootReducer, initialState);
  return store;
};
