import { combineReducers } from 'redux';
import dataReducer from './data-reducer';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;
