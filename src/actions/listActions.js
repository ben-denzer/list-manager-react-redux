import * as types from '../constants/actionTypes';
import listApi from '../api/mockApi.js';

export function loadListSuccess(lists) {
  return {type: types.LIST_LOADED, lists};
}

export function loadList() {
  return (dispatch) => {
    return listApi.getLists().then((lists) => {
      dispatch(loadListSuccess(lists));
    });
  };
}
