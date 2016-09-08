import * as types from '../constants/actionTypes';
import {browserHistory} from 'react-router';
import * as actions from '../api/listApi';

function loadUserSuccess(username, token, lists) {
    browserHistory.push('/');
    return {type: types.LOAD_USER_SUCCESS, username, token, lists};
}

function authError() {
    return {type: types.AUTH_ERROR};
}

function connectionError() {
    return {type: types.CONNECTION_ERROR};
}

export function loadUser(options) {
    return (dispatch) => {
        return actions.loadUserData(options).then(
            (data) => dispatch(loadUserSuccess(options.username, data.token, data.lists))
            ).catch((err) => err.error === 'auth error' ? dispatch(authError()) : console.log(err)
        );
    };
}

export function logout() {
    return {type: types.LOG_OUT};
}
