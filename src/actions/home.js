import * as actionTypes from '../constants/actionTypes';

const serviceBase = 'http://localhost:3001/api/v1/';

export const loadContent = () => (dispatch) => {
  return fetch(serviceBase + 'content')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: actionTypes.LOAD_CONTENT, content: data });
    });
};
