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

export function toggleCheck(itemIndex, activeList) {
  return {type: types.TOGGLE_CHECK, itemIndex, activeList};
}

export function changeActive(newActive) {
  return {type: types.CHANGE_ACTIVE, newActive};
}

export function deleteList(activeList) {
  return {type: types.DELETE_LIST, activeList};
}

export function newItemTextChange(currentText) {
  return {type: types.NEW_ITEM_TEXT_CHANGE, currentText};
}

export function newListTextChange(currentText) {
  return {type: types.NEW_LIST_TEXT_CHANGE, currentText};
}

export function addNewList(name) {
  return {type: types.ADD_NEW_LIST, name};
}

export function deleteItem(itemIndex, activeList) {
  return {type: types.DELETE_ITEM, itemIndex, activeList};
}

export function addNewItem(itemName, activeList) {
  return {type: types.ADD_NEW_ITEM, itemName, activeList};
}
