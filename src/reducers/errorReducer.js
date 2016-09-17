import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function errorReducer(state = initialState.error, action) {
    switch(action.type) {
        case 'API_ERROR':
            if (action.err.error === '403') browserHistory.push('login');
            return Object.assign({}, state, {[action.err.error]: action.err.status});
        case 'API_SUCCESS':
        case 'DELETE_ITEM':
        case 'DELETE_LIST':
        case 'LOAD_USER_SUCCESS':
        case 'USERNAME_TAKEN':
        case 'USERNAME_OK':
            return {};
        default: return state;
    }
}
