import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
    switch(action.type) {
    case 'LOAD_USER_SUCCESS':
        return Object.assign({}, state, {
            username: action.username,
            token: action.token,
            authError: false
        });
    case 'AUTH_ERROR':
        return Object.assign({}, state, {authError: true});
    case 'LOG_OUT':
        return {
            username: null,
            token: null,
            authError: false
        };
    default:
        return state;
    }
}
