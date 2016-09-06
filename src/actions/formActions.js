import * as types from '../constants/actionTypes';
import {signupDB, checkUsernameDB} from '../api/listApi'
import {changeUrl} from '../routes';

export function handleChange(val, id) {
    return (dispatch) => {
        if (id === 'signupUsernameVal') {
            dispatch(checkUsername(val));
        }
        dispatch({type: types.HANDLE_CHANGE, val, id});
    }
}

function usernameTaken() {
    console.log('username taken');
    return {type: types.USERNAME_TAKEN};
}

function usernameOk() {
    console.log('username ok');
    return {type: types.USERNAME_OK};
}

export function checkUsername(username) {
    console.log('checking');
    return (dispatch) => {
        checkUsernameDB(username).then(
            (data) => {
                (data.success) ? dispatch(usernameOk()) : dispatch(usernameTaken());
            },
            (err) => console.error('error in checkUsername')
        );
    }
}

function signupSuccess(username, password) {
    changeUrl('/');
    return {type: types.LOAD_USER_SUCCESS, username, password};
}

export function signup(username, password) {
    return (dispatch) => {
        signupDB(username, password).then(
            (data) => {
                data.error ? dispatch(usernameTaken()) : dispatch(signupSuccess(username, password));
            },
            (err) => console.error(err)
        );
    }
}