import * as types from '../constants/actionTypes';
import {browserHistory} from 'react-router';
import * as actions from '../api/listApi';

function loadUserSuccess(username, token, lists) {
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('token', token);
    browserHistory.push('/');
    return {type: types.LOAD_USER_SUCCESS, username, token, lists};
}

export function loadUser(options) {
    return (dispatch) => {
        return actions.loadUserData(options).then(
            (data) => dispatch(loadUserSuccess(options.username, data.token, data.lists))
            ).catch((err) => dispatch({type: types.API_ERROR, err})
        );
    };
}

export function loginWithToken(username, token) {
    return (dispatch) => {
        return actions.loginWithToken({token}).then(
            (data) => dispatch(loadUserSuccess(username, token, data.lists)),
            (err) => dispatch({type: types.API_ERROR, err})
        );
    };
}

export function logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('token');
    return {type: types.LOG_OUT};
}
