import { combineReducers } from 'redux';
import spellCacheReducer from './spellCacheReducer';
import selectedSpellReducer from './selectedSpellReducer';
import directoryReducer from './directoryReducer';

const rootReducer = combineReducers({
  spellDirectory: directoryReducer,
  selectedSpell: selectedSpellReducer,
  spellCache: spellCacheReducer,
});

export default rootReducer;
