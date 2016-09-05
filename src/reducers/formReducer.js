import initialState from './initialState';

export default function(state = initialState.form, action) {
    switch(action.type) {
        case 'HANDLE_CHANGE':
            return Object.assign({}, state, {[action.id]: action.val});
        case 'USERNAME_TAKEN':
            return Object.assign({}, state, {error: 'Username Taken, please try another'});
        case 'USERNAME_OK':
            return Object.assign({}, state, {error: null});
        default:
            return state;
    }
}