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
  });
});
