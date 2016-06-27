import initialState from './initialState';

export default function listReducer(state = initialState.lists, action) {
  switch(action.type) {
    case 'TOGGLE_CHECK':
      return state;
    case 'DELETE_LIST':
      return Object.assign({}, state, delete state[action.activeList]);
    default:
      return state;
  }
}
