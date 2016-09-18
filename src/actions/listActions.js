import * as types from '../constants/actionTypes';
import {addItemToDB, removeItemsFromDB, toggleCheckDB, deleteListDB} from '../api/listApi';

export function addNewItem(token, itemName, activeList) {
    return (dispatch) => {
        addItemToDB({token, item_name: itemName, list_name: activeList, checked: false}).then(
            (data) => {
                dispatch({
                    type: types.ADD_NEW_ITEM,
                    itemName,
                    activeList,
                    item_id: data.item_id
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

function deleteItemSuccess(trash, activeList) {
    return {type: types.DELETE_ITEMS, trash, activeList};
}

function deleteItems(token, activeList, trash) {
    return (dispatch) => {
        removeItemsFromDB({token, trash}).then(
            () => {
                dispatch(deleteItemSuccess(trash, activeList));
            },
            (err) => dispatch({type: types.API_ERROR, err})
        );
    };
}

export function deleteItemTemp(token, activeList, item_id, trash) {
    const itemsToRemove = [...trash, item_id];
    return (dispatch) => {
        dispatch(putInTrash(item_id));
        if (window.undoTimer) {
            clearTimeout(window.undoTimer);
        }
        window.undoTimer = setTimeout(() => dispatch(deleteItems(token, activeList, itemsToRemove)), 3000);
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

function putInTrash(item_id) {
    return {type: types.DELETE_ITEM_TEMP, item_id};
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
