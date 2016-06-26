import initialState from './initialState';

export default function userReducer(state = initialState.name, action) {
  switch(action.type) {
    default:
      return state;
  }
}
