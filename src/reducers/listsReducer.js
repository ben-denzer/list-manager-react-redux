import initialState from './initialState';

export default function listReducer(state = initialState.lists, action) {
  let itemIndex = action.itemIndex;
  let activeListName = action.activeList;
  let name = action.name;
  let itemName = action.itemName;
  let tempState;
  
  switch(action.type) {
    case 'USER_LOADED_SUCCESS':
      return action.db.lists;

    case 'TOGGLE_CHECK':
      tempState = Object.assign({}, state);
      tempState[activeListName][itemIndex].finished = !tempState[activeListName][itemIndex].finished;
      tempState[activeListName] = tempState[activeListName].filter(a => a);
      return tempState;

    case 'ADD_NEW_ITEM':
      tempState = Object.assign({}, state);
      tempState[activeListName].push({item: itemName, finished: false});
      return tempState;

    case 'DELETE_ITEM':
      tempState = Object.assign({}, state);
      tempState[activeListName] = tempState[activeListName].filter(a => a.item !== itemName);
      return tempState;

    case 'ADD_NEW_LIST':
      tempState = Object.assign({}, state);
      return Object.assign({}, tempState, tempState[name] = []);

    case 'DELETE_LIST':
      tempState = Object.assign({}, state);
      return Object.assign({}, tempState, delete tempState[activeListName]);

    default:
      return state;
  }
}
