import { combineReducers } from 'redux';
import localSpellsReducer from './localSpellsReducer';
import selectedSpellReducer from './selectedSpellReducer';

const rootReducer = combineReducers({
  localSpells: localSpellsReducer,
  spellDirectory: directoryReducer
});

export default rootReducer;
