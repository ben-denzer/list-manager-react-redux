import * as types from '../constants/actionTypes';
import {browserHistory} from 'react-router';
import * as dbActions from '../api/listApi';

function loadUserSuccess(lists) {
    browserHistory.push('/');
    return {type: types.LOAD_USER_SUCCESS, lists};
}

export function loadUser(username, password) {
    return (dispatch) => {
        return dbActions.loadUserData(username, password).then(
                (data) => dispatch(loadUserSuccess(data))
            ).catch((err) => {
                throw(err);
            }
        );
    };
}

