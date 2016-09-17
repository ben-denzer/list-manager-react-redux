import initialState from './initialState';

export default function trashReducer(state = initialState.trash, action) {
    switch(action.type) {
        case 'DELETE_ITEM_TEMP':
            return [...state, action.itemName];
        case 'UNDO_DELETE':
            return state.filter(a => {
              console.log('state', state, 'a', a, 'action.itemName', action.itemName);
              return a !== action.itemName;
            });
        case 'DELETE_ITEM':
            if (state.length > 1) {
                return state.slice(1);
            } else {
                return [];
            }
            default:
                return state;
    }
}
