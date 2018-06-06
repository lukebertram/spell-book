import constants from './../../constants';
import * as actions from './../../actions';
import selectedSpellReducer from './../../reducers/selectedSpellReducer';
import spellCacheReducer from './../../reducers/spellCacheReducer';
import directoryReducer from './../../reducers/directoryReducer';
import rootReducer from './../../reducers/';
import { createStore } from 'redux';

describe('Spellbook App', () => {
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
      expect(directoryReducer(initialState.spellDirectory, action)).toEqual(
        newSpellDirectoryState
      );
    });

    it('Should update state when spell directory info is received from API', () => {
      const spellDirectoryResponseResults = [
        {
          name: 'Spell Name',
          url: 'http://whatintheactualfuck.com'
        }
      ];
      const action = actions.receiveDirectory(spellDirectoryResponseResults);
      const newSpellDirectoryState = {
        isFetching: false,
        spellList: [
          {
            name: 'Spell Name',
            url: 'http://whatintheactualfuck.com'
          }
        ]
      };
      expect(directoryReducer(initialState.spellDirectory, action)).toEqual(
        newSpellDirectoryState
      );
    });
  });

  describe('spellCacheReducer', () => {
    it('Should update isFetching state when API spellInfo is requested', () => {
      const action = actions.requestSpellInfo('Magic Missile');
      const newspellCacheState = {
        'Magic Missile': {
          desc: 'Loading...',
          isFetching: true,
          name: 'Magic Missile'
        }
      };
      expect(spellCacheReducer(initialState.spellCache, action)).toEqual(
        newspellCacheState
      );
    });
  });

  describe('selectedSpellReducer', () => {
    it('Should return default state if no action type is recognized', () => {
      expect(
        selectedSpellReducer(initialState.selectedSpell, { type: null })
      ).toEqual(initialState.selectedSpell);
    });

    it('Should record which spell has been selected by user', () => {
      const action = actions.selectSpell(1);
      expect(selectedSpellReducer(initialState.selectedSpell, action)).toEqual(
        1
      );
    });
  });
});
