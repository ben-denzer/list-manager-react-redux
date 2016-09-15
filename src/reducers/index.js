import { combineReducers } from 'redux';
import lists from './listsReducer';
import user from './userReducer';
import activeList from './activeListReducer';
import text from './textReducer';
import trash from './trashReducer';
import form from './formReducer';
import error from './errorReducer';

export default combineReducers({
    user,
    lists,
    activeList,
    text,
    trash,
    form,
    error
});
