import constants from './../constants';
const { initialState, types } = constants;

const mySpellsReducer = (state = initialState.mySpells, action) => {
  switch (action.type) {
    case types.TOGGLE_SPELL:
    console.log('toggle spell switch');
    const newMySpells = Object.assign({}, state);
      if (state[action.selectedSpell]) {
        console.log('if');
        delete newMySpells[action.selectedSpell];
      } else {
        console.log('else', action.selectedSpell, action.spellCache);
        newMySpells[action.selectedSpell] = action.spellCache[action.selectedSpell];
      }
      return newMySpells;
    default:
      console.warn('default mySpellsReducer', action.type);
      return state;
  }
};

export default mySpellsReducer;

// remove .known from spell Object and just check if spell exists in mySpells
