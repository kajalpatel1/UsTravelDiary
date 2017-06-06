import { combineReducers } from 'redux';
import StateDetailsReducer from './reducer_state-details';
import ActiveState from './reducer_active-state';

const rootReducer = combineReducers({
  usstate: StateDetailsReducer,
  activeState: ActiveState
});

export default rootReducer;
