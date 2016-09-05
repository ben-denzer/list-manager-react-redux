import * as types from '../constants/actionTypes';
import {browserHistory} from 'react-router';
import * as actions from '../api/listApi';

function loadUserSuccess(username, password, lists) {
    browserHistory.push('/');
    return {type: types.LOAD_USER_SUCCESS, username, password, lists};
}

function authError() {
    return {type: types.AUTH_ERROR};
}

function connectionError() {
    return {type: types.CONNECTION_ERROR};
}

export function loadUser(username, password) {
    return (dispatch) => {
        return actions.loadUserData(username, password).then(
            (data) => dispatch(loadUserSuccess(username, password, data))
            ).catch((err) => err.error === 'auth error' ? dispatch(authError()) : console.log('??')
        );
    };
}

export function logout() {
    return {type: types.LOG_OUT};
}
