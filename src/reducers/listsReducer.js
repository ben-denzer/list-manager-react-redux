import initialState from './initialState';

export default function listReducer(state = initialState.lists, action) {
    const itemIndex = action.itemIndex;
    const activeListName = action.activeList;
    const name = action.name;
    const itemName = action.itemName;
    const trash = action.trash;
    const item_id = action.item_id;
    let tempState;

    switch(action.type) {
        case 'LOAD_USER_SUCCESS':
            return Object.assign({}, action.lists);
        case 'TOGGLE_CHECK':
            tempState = Object.assign(
                {},
                state[activeListName][itemIndex],
                {checked: !state[activeListName][itemIndex].checked}
            );
            return Object.assign(
                {},
                state,
                {[activeListName]:
                    [
                        ...state[activeListName].slice(0, itemIndex),
                        tempState,
                        ...state[activeListName].slice(itemIndex + 1)
                    ]
                }
            );
        case 'ADD_NEW_ITEM':
            tempState = Object.assign({}, state);
            tempState[activeListName] = [...tempState[activeListName], {item: itemName, finished: false, item_id}];
            return tempState;
        case 'DELETE_ITEMS':
            return Object.assign(
                {},
                state,
                {[activeListName]: state[activeListName].filter(a => trash.indexOf(a.item_id) === -1)}
            );
        case 'ADD_NEW_LIST':
            tempState = Object.assign({}, state);
            return Object.assign({}, tempState, tempState[name] = []);
        case 'DELETE_LIST':
            tempState = Object.assign({}, state);
            return Object.assign({}, tempState, delete tempState[activeListName]);
        case 'LOG_OUT':
            return {};
        default:
            return state;
    }
}
