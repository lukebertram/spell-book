import { combineReducers } from 'redux';
import spellCacheReducer from './spellCacheReducer';
import selectedSpellReducer from './selectedSpellReducer';
import directoryReducer from './directoryReducer';
import mySpellsReducer from './mySpellsReducer';

const rootReducer = combineReducers({
  spellDirectory: directoryReducer,
  selectedSpell: selectedSpellReducer,
  spellCache: spellCacheReducer,
  mySpells: mySpellsReducer
});

export default rootReducer;
