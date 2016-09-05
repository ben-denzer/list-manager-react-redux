import * as types from '../constants/actionTypes';
import {signupDB, checkUsernameDB} from '../api/listApi'
import {changeUrl} from '../routes';

export function handleChange(val, id) {
    return {type: types.HANDLE_CHANGE, val, id};
}

function signupSuccess(username, password) {
    changeUrl('/');
    return {type: types.LOAD_USER_SUCCESS, username, password};
}

export function signup(username, password) {
    return (dispatch) => {
        signupDB(username, password).then(
            (data) => dispatch(signupSuccess(username, password)),
            (err) => console.error(err)
        );
    }
}

function usernameTaken() {
    return {type: types.USERNAME_TAKEN};
}

function usernameOk() {
    return {type: types.USERNAME_OK};
}

export function checkUsername(username) {
    return (dispatch) => {
        checkUsernameDB(username).then(
            (data) => {
                (data.success) ? dispatch(usernameOk()) : dispatch(usernameTaken());
            },
            (err) => null // No need to stop the show here
        );
    }
}