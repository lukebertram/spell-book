import constants from './../constants';
const { initialState, types } = constants;

const localSpellsReducer = (state = initialState.localSpells, action) => {
  switch (action.type) {
    case 'FARTS':
      return state;
    default:
      return state;
  }
};

export default localSpellsReducer;
