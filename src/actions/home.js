import * as actionTypes from '../constants/actionTypes';

const apiUrl = 'http://localhost:3001/api/v1/';

export const loadContent = () => (dispatch) => {
  return fetch(apiUrl + 'content')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: actionTypes.LOAD_CONTENT, content: data });
    });
};
