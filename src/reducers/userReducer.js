import initialState from './initialState';

export default function userReducer(state = initialState.name, action) {
  switch(action.type) {
    case 'USER_LOADED_SUCCESS':
      return action.db.name;
    default:
      return state;
  }
}
