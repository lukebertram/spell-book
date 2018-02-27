import constants from './../constants';
const { initialState, types } = constants;

const directoryReducer = (state = initialState.spellDirectory, action) => {
  switch (action.type) {
    case types.REQUEST_DIRECTORY_LIST:
      const newSpellDirectoryState = Object.assign({}, state, {
        isFetching: true
      });
      return newSpellDirectoryState;
    default:
      return state;
  }
}

export default directoryReducer;
