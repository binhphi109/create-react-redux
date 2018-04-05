import * as actionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CONTENT:
      return {
        ...state,
        content: action.content
      };
    default:
      return state;
  }
};
