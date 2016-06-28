// Set up your root reducer here...
import { combineReducers } from 'redux';
import lists from './listsReducer';
import user from './userReducer';
import activeList from './activeListReducer';
import text from './textReducer';
import trash from './trashReducer';

export default combineReducers({
  lists,
  user,
  activeList,
  text,
  trash
});
