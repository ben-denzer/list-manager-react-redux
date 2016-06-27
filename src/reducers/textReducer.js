import initialState from './initialState';

export default function newItemReducer(state = initialState.text, action) {
  switch(action.type) {
    case 'NEW_ITEM_TEXT_CHANGE':
      return Object.assign({}, state, {newItemText: action.currentText || ''});
    case 'ADD_NEW_ITEM':
      return Object.assign({}, state, {newItemText: ''});
    case 'NEW_LIST_TEXT_CHANGE':
      return Object.assign({}, state, {newListText: action.currentText || ''});
    case 'ADD_NEW_LIST':
      return Object.assign({}, state, {newListText: ''});
    default:
      return state;
  }
}
