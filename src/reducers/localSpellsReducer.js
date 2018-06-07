import constants from './../constants';
const { initialState, types } = constants;

const localSpellsReducer = (state = initialState.localSpells, action) => {
  let newLocalSpellsStateSlice;
  switch (action.type) {
    case types.REQUEST_SPELL_INFO:
      const newSpellToAdd = {
        name: action.spellName,
        desc: 'Loading...',
        isFetching: true
      };
      newLocalSpellsStateSlice = Object.assign({}, state, {
        [action.spellName]: newSpellToAdd
      });
      return newLocalSpellsStateSlice;

    case types.RECEIVE_SPELL_INFO:
      const receivedSpell = {
        ...action.receivedSpell,
        isFetching: false,
        known: false
      };

      newLocalSpellsStateSlice = Object.assign({}, state, {
        [action.name]: receivedSpell
      });
      return newLocalSpellsStateSlice;

    default:
      return state;
  }
};

export default localSpellsReducer;
