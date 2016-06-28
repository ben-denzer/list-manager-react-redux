import * as types from '../constants/actionTypes';
import listApi from '../api/mockApi';

export function loadUserSuccess(db) {
  return {type: types.USER_LOADED_SUCCESS, db};
}

export function loadUser() {
  return (dispatch) => {
    return listApi.loadUser().then((db) => {
      dispatch(loadUserSuccess(db));
    });
  };
}
