// Set up your root reducer here...
import { combineReducers } from 'redux';
import lists from './listsReducer';
import user from './userReducer';
import activeList from './activeListReducer';
import newItemText from './newItemTextReducer';

export default combineReducers({
  lists,
  user,
  activeList,
  newItemText
});
