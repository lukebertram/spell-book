import constants from './../constants';
const { initialState, types } = constants;

const selectedSpellReducer = (state = initialState.selectedSpell, action) => {
  switch (action.type) {
    case types.SELECT_SPELL:
      return action.newSelectedSpellName;
    default:
      console.warn('default selectedSpellReducer');
      return state;
  }
};

export default selectedSpellReducer;

// remove .known from spell Object and just check if spell exists in mySpells
