import { FETCH_ALL_TANKS } from "../actions/weapons";

// import { SET_CURRENT_LAUNCH } from "../actions/weapon";

const initialState = {
  tanks: []
};

export default function weaponsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_TANKS: {
      return { ...state, tanks: action.payload };
    }
    default:
      return state;
  }
}
