import constants from './../constants';
const { initialState, types } = constants;

const selectedSpellReducer = (state = initialState.selectedSpell, action) => {
  switch (action.type) {
    case 'FARTS':
      return state;
    default:
      return state;
  }
};

export default selectedSpellReducer;
