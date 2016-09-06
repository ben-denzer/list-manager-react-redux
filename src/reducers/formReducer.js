import initialState from './initialState';

export default function(state = initialState.form, action) {
    let newError;
    switch(action.type) {
        case 'HANDLE_CHANGE':
            return Object.assign({}, state, {[action.id]: action.val});
        case 'USERNAME_TAKEN':
            newError = Object.assign({}, state.error, {usernameError: true});
            return Object.assign({}, state, {error: newError});
        case 'USERNAME_OK':
            newError = Object.assign({}, state.error, {usernameError: null});
            return Object.assign({}, state, {error: newError});
        default:
            return state;
    }
}