import { createStore } from 'redux';
import { ADD_LINK } from "./actions/link-actions";
// TODO: import appReducers

const initialState = {
  links: [
    { label: 'Google', url: 'https://google.com' },
  ],
};

function appReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        links: [
          ...state.links,
          action.payload,
        ],
      };
    default:
      return state;
  }
}

const store = createStore(appReducers);

export default store;
