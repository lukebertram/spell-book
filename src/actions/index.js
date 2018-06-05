import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

// FOR DIRECTORY REDUCER
export const requestDirectory = () => ({
  type: types.REQUEST_DIRECTORY_LIST
});

export const receiveDirectory = spellDirectoryResponse => ({
  type: types.RECEIVE_DIRECTORY_LIST,
  spellList: spellDirectoryResponse
});

export function fetchDirectoryContents() {
  return function(dispatch) {
    dispatch(requestDirectory());
    return fetch('http://www.dnd5eapi.co/api/spells')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(function(json) {
        console.log('HERE IS THE LIST OF SPELLS, DAWG: ', json);
        dispatch(receiveDirectory(json.results));
      });
    // add error handling action here?
  };
}

// FOR LOCAL SPELLS REDUCER
export const requestSpellInfo = spellName => ({
  type: types.REQUEST_SPELL_INFO,
  spellName
});

export const receiveSpellInfo = spellInfo => ({
  type: types.RECEIVE_SPELL_INFO,
  newLocalSpellsEntry: spellInfo,
  name: spellInfo.name
});

export function fetchSpellInfo(spell) {
  return function(dispatch) {
    dispatch(requestSpellInfo(spell.name));
    return fetch(spell.url)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(function(json) {
        console.log('SPELL DISPLAY DETAILS: ', json);
        const name = json.name;
        const id = json._id;
        const desc = json.desc;
        dispatch(receiveSpellInfo(name, id, desc));
      });
  };
}

// FOR SELECTED SPELL REDUCER

export const selectSpell = selectedSpellId => ({
  type: types.SELECT_SPELL,
  newSelectedSpellId: selectedSpellId
});
