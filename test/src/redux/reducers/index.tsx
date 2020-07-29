import { combineReducers } from 'redux';
import dessertsReducer from './DessertsReducer';

const rootReducers = combineReducers({
  desserts: dessertsReducer,
});

export default rootReducers;
