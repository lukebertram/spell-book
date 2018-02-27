import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestDirectory = () => ({
  type: types.REQUEST_DIRECTORY_LIST
});

export const receiveDirectory = (spellDirectoryResponse) => ({
  type: types.RECEIVE_DIRECTORY_LIST,
  spellList: spellDirectoryResponse
});

export function fetchDirectoryContents(){
  return function (dispatch) {
    dispatch(requestDirectory());
    return fetch('http://www.dnd5eapi.co/api/spells')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      ).then(function(json) {
        console.log('HERE IS THE LIST OF SPELLS, DAWG: ', json)
        dispatch(receiveDirectory(json.results));
      });
  };
};
