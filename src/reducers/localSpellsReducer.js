import constants from './../constants';
const { initialState, types } = constants;

const localSpellsReducer = (state = initialState.localSpells, action) => {
  switch (action.type) {
    case types.REQUEST_SPELL_INFO:
      const newSpellToAdd = {
        name: action.spellName,
        desc: 'Loading...',
        isFetching: true
      };
      const newLocalSpellsStateSlice = Object.assign({}, state, {
        [action.spellName]: newSpellToAdd
      });
      return newLocalSpellsStateSlice;

    case types.RECEIVE_SPELL_INFO:
      return state;

    default:
      return state;
  }
};

export default localSpellsReducer;
