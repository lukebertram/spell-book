import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestDirectory = () => ({
  type: types.REQUEST_DIRECTORY_LIST
});

export function fetchDirectoryContents(){
  return fetch(
    ''
  )
};
