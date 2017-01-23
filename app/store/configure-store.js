import rootReducer from '../reducers';
import { createStore } from 'redux';

export default (initialState) => {
  var store = createStore(rootReducer, initialState);
  // store.subscribe(() => {
  //   console.log('store changed', store.getState());
  // });
  return store;
};
