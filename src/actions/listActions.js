import * as types from '../constants/actionTypes';

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

export function deleteItem(itemName, activeList) {
  return {type: types.DELETE_ITEM, itemName, activeList};
}

export function undoDelete() {
  clearTimeout(window.undoTimer);
  return {type: types.UNDO_DELETE};
}

export function deleteItemTemp(itemName, activeList) {
  return (dispatch) => {
    dispatch(putInTrash(itemName));
    window.undoTimer = setTimeout(() => dispatch(deleteItem(itemName, activeList)), 3000);
  };
}

function putInTrash(itemName) {
  return {type: types.DELETE_ITEM_TEMP, itemName};
}

export function addNewItem(itemName, activeList) {
  return {type: types.ADD_NEW_ITEM, itemName, activeList};
}
