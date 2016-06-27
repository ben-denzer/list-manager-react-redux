import initialState from './initialState';

export default function listReducer(state = initialState.lists, action) {
  let tempState;
  let itemIndex = action.itemIndex;
  let activeListName = action.activeList;
  let name = action.name;
  let itemName = action.itemName;

  switch(action.type) {
    case 'TOGGLE_CHECK':
    tempState = Object.assign({}, state);
    tempState[activeListName][itemIndex].finished = !tempState[activeListName][itemIndex].finished;
    tempState[activeListName] = tempState[activeListName].filter(a => a);
    return tempState;

    case 'ADD_NEW_ITEM':
      // let a = state.store1;
      // return Object.assign({}, state, {store1 :[...a, {item: 'm', finished: false}]});
      tempState = Object.assign({}, state);
      tempState[activeListName].push({item: itemName, finished: false});
      return tempState;

    case 'DELETE_ITEM':
      tempState = Object.assign({}, state);
      delete tempState[activeListName][itemIndex];
      tempState[activeListName] = tempState[activeListName].filter(a => a);
      return tempState;

    case 'ADD_NEW_LIST':
      tempState = Object.assign({}, state);
      return Object.assign({}, tempState, tempState[name] = []);

    case 'DELETE_LIST':
      return Object.assign({}, state, delete state[activeListName]);
    default:
      return state;
  }
}
