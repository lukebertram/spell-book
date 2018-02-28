import constants from './../constants';
const { initialState, types } = constants;

const localSpellsReducer = (state = initialState.localSpells, action) => {
  switch (action.type) {
    case types.REQUEST_SPELL_INFO:
      const newSpellToAdd = {
        name: action.spellName,
        id: action.localSpellId,
        desc: 'Loading...',
        isFetching: true
      }
      const newLocalSpellsStateSlice = Object.assign({}, state, {
        [action.localSpellId]: newSpellToAdd
      });
      return newLocalSpellsStateSlice;
    default:
      return state;
  }
};

export default localSpellsReducer;
