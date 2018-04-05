import * as actionTypes from '../constants/actionTypes';

export const loadContent = () => (dispatch) => {
  return setTimeout(() => {
    dispatch({ type: actionTypes.LOAD_CONTENT, content: 'Hello World' });
  }, 3000);
};
