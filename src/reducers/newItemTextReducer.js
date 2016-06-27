import initialState from './initialState';

export default function newItemReducer(state = initialState.newItemText, action) {
  switch(action.type) {
    case 'NEW_ITEM_TEXT_CHANGE':
      return action.currentText;
    default:
      return state;
  }
}
