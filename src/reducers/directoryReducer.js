import constants from './../constants';
const { initialState, types } = constants;

const directoryReducer = (state = initialState.spellDirectory, action) => {
  switch (action.type) {
    case 'FARTS':
      return state;
    default:
      return state;
  }
}

export default directoryReducer;
