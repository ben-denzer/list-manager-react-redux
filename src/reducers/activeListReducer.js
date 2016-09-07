import initialState from './initialState';

export default function activeListReducer(state = initialState.activeList, action) {
    switch(action.type) {
        case 'CHANGE_ACTIVE':
            return action.newActive;
        case 'ADD_NEW_LIST':
            return action.name;
        case 'DELETE_LIST':
            return '';
        case 'USER_LOADED_SUCCESS':
            return '';
        case 'LOG_OUT':
            return '';
        default:
            return state;
    }
}
