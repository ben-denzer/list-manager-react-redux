import initialState from './initialState';

export default function trashReducer(state = initialState.trash, action) {
    switch(action.type) {
        case 'DELETE_ITEM_TEMP':
            return [...state, action.item_id];
        case 'API_ERROR':
        case 'UNDO_DELETE':
        case 'DELETE_ITEMS':
            return [];
        default:
            return state;
    }
}
