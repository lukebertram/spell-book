import { combineReducers } from 'redux';
import localSpellsReducer from './localSpellsReducer';
import selectedSpellReducer from './selectedSpellReducer';
import directoryReducer from './directoryReducer';

const rootReducer = combineReducers({
  spellDirectory: directoryReducer,
  selectedSpell: selectedSpellReducer,
  localSpells: localSpellsReducer,
});

export default rootReducer;
