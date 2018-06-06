import constants from './../constants';
const { initialState, types } = constants;

const spellCacheReducer = (state = initialState.spellCache, action) => {
  let newspellCacheStateSlice;
  switch (action.type) {
    case types.REQUEST_SPELL_INFO:
      const newSpellToAdd = {
        name: action.spellName,
        desc: 'Loading...',
        isFetching: true
      };
      newspellCacheStateSlice = Object.assign({}, state, {
        [action.spellName]: newSpellToAdd
      });
      return newspellCacheStateSlice;

    case types.RECEIVE_SPELL_INFO:
      const receivedSpell = {
        ...action.receivedSpell,
        isFetching: false,
        known: false
      };

      newspellCacheStateSlice = Object.assign({}, state, {
        [action.name]: receivedSpell
      });
      return newspellCacheStateSlice;

    default:
      return state;
  }
};

export default spellCacheReducer;
