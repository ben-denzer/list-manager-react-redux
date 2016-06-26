import initialState from './initialState';

export default function listReducer(state = initialState.lists, action) {
  switch(action.type) {
    default:
      return state;
  }
}
