import * as types from '../constants/actionTypes';
import {addItemToDB, removeItemFromDB, toggleCheckDB, deleteListDB} from '../api/listApi';

export function addNewItem(token, itemName, activeList) {
    return (dispatch) => {
        addItemToDB({token, item_name: itemName, list_name: activeList, checked: false}).then(
            (data) => {
                dispatch({
                    type: types.ADD_NEW_ITEM,
                    itemName,
                    activeList,
                    itemId: data.item_id
                });
                dispatch({type: types.API_SUCCESS});
            },
            (err) => dispatch({type: types.API_ERROR, err})
        );
    };
}

export function addNewList(name) {
    return {type: types.ADD_NEW_LIST, name};
}

export function changeActive(newActive) {
    return {type: types.CHANGE_ACTIVE, newActive};
}

function deleteItemSuccess(itemName, activeList) {
    return {type: types.DELETE_ITEM, itemName, activeList};
}

function deleteItem(token, itemName, activeList, item_id) {
    return (dispatch) => {
        removeItemFromDB({token, item_id}).then(
            () => {
                dispatch(deleteItemSuccess(itemName, activeList));
            },
            (err) => dispatch({type: types.API_ERROR, err})
        );
    };
}

export function deleteItemTemp(token, itemName, activeList, item_id) {
    return (dispatch) => {
        dispatch(putInTrash(itemName));
        window.undoTimer = setTimeout(() => dispatch(deleteItem(token, itemName, activeList, item_id)), 3000);
    };
}

function deleteListSuccess(activeList, dispatch) {
    dispatch({type: types.DELETE_LIST, activeList});
}

export function deleteList(token, activeList) {
    return function(dispatch) {
        deleteListDB({token, activeList}).then(
            () => deleteListSuccess(activeList, dispatch),
            (err) => dispatch({type: types.API_ERROR, err})
        );
    };
}

export function newItemTextChange(currentText) {
    return {type: types.NEW_ITEM_TEXT_CHANGE, currentText};
}

export function newListTextChange(currentText) {
    return {type: types.NEW_LIST_TEXT_CHANGE, currentText};
}

function putInTrash(itemName) {
    return {type: types.DELETE_ITEM_TEMP, itemName};
}

function toggleCheckAPI(token, item_id, oldStatus, dispatch) {
    let newStatus = !oldStatus;
    toggleCheckDB({token, item_id, newStatus}).then(
        () => null,
        (err) => dispatch({type: types.API_ERROR, err})
    );
}

export function toggleCheck(token, item_id, oldStatus, itemIndex, activeList) {
    return (dispatch) => {
        dispatch({type: types.TOGGLE_CHECK, itemIndex, activeList});
        toggleCheckAPI(token, item_id, oldStatus, dispatch);
    };
}

export function undoDelete(itemName) {
    clearTimeout(window.undoTimer);
    return {type: types.UNDO_DELETE, itemName};
}
