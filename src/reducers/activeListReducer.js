import initialState from './initialState';

export default function activeListReducer(state = initialState.activeList, action) {
  switch(action.type) {
    case 'CHANGE_ACTIVE':
      return action.newActive;
    case 'DELETE_LIST':
      return '';
    default:
      return state;
  }
}
