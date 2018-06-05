import constants from './../constants';
const { initialState, types } = constants;

const selectedSpellReducer = (state = initialState.selectedSpell, action) => {
  switch (action.type) {
    case types.SELECT_SPELL:
      return action.newSelectedSpellName;

    default:
      return state;
  }
};

export default selectedSpellReducer;
