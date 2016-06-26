import initialState from './initialState';

export default function activeListReducer(state = initialState.activeList, action) {
  switch(action.type) {
    default:
      return state;
  }
}
