import * as types from '../constants/actionTypes';
import {addItemToDB, removeItemFromDB, toggleCheckDB, deleteListDB} from '../api/listApi';

function toggleCheckAPI(token, item_id, oldStatus) {
    let newStatus = !oldStatus;
    toggleCheckDB(token, item_id, newStatus).then(
        (data) => null,
        (err) => console.error('error in promise toggleCheckDB')
    );
}

export function toggleCheck(token, item_id, oldStatus, itemIndex, activeList) {
    toggleCheckAPI(token, item_id, oldStatus);
    return {type: types.TOGGLE_CHECK, itemIndex, activeList};
}

export function changeActive(newActive) {
    return {type: types.CHANGE_ACTIVE, newActive};
}

function deleteListSuccess(activeList, dispatch) {
    dispatch({type: types.DELETE_LIST, activeList});
}

export function deleteList(token, activeList) {
    return function(dispatch) {
        deleteListDB(token, activeList).then(
            (data) => deleteListSuccess(activeList, dispatch),
            (err) => console.error(err)
        );
    };
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

function deleteItemSuccess(itemName, activeList) {
    return {type: types.DELETE_ITEM, itemName, activeList};
}

function deleteItem(token, itemName, activeList, item_id) {
    return (dispatch) => {
        removeItemFromDB(token, item_id).then(
            (data) => {
                dispatch(deleteItemSuccess(itemName, activeList));
            },
            (err) => console.error(err)
        );
    };
}

export function undoDelete() {
    clearTimeout(window.undoTimer);
    return {type: types.UNDO_DELETE};
}

export function deleteItemTemp(token, itemName, activeList, item_id) {
    return (dispatch) => {
        dispatch(putInTrash(itemName));
        window.undoTimer = setTimeout(() => dispatch(deleteItem(token, itemName, activeList, item_id)), 3000);
    };
}

function putInTrash(itemName) {
    return {type: types.DELETE_ITEM_TEMP, itemName};
}

export function addNewItem(token, itemName, activeList) {
    return (dispatch) => {
        addItemToDB(token, itemName, activeList).then(
            (data) => {
              dispatch({type: types.ADD_NEW_ITEM, itemName, activeList, itemId: data.item_id});
            },
            (err) => console.error(err)
        );
    };
}
