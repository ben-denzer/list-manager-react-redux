// Set up your root reducer here...
import { combineReducers } from 'redux';
import list from './listReducer';

export default combineReducers({list});
