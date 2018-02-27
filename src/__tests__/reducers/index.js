import constants from './../../constants';
import * as actions from './../../actions';
import selectedSpellReducer from './../../reducers/selectedSpellReducer';
import localSpellsReducer from './../../reducers/localSpellsReducer';
import directoryReducer from './../../reducers/directoryReducer';
import rootReducer from './../../reducers/';
import { createStore } from 'redux';

describe('Spellbook App', ()=>{
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('directoryReducer', () => {
    it('Should accept and return initialState.', () => {
      expect(
        directoryReducer(initialState.spellDirectory, { type: null })
      ).toEqual(initialState.spellDirectory);
    });

    it('Should update state when API spell directory is being requested.', () => {
      const action = actions.requestDirectory();
      const newSpellDirectoryState = {
        isFetching: true,
        spellList: []
      };
      expect(
        directoryReducer(initialState.spellDirectory, action)
      ).toEqual(newSpellDirectoryState);
    });

  });
});
