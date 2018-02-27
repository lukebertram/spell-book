import constants from './../constants';
const { initialState, types } = constants;

const directoryReducer = (state = initialState.spellDirectory, action) => {
  let newSpellDirectoryState;
  switch (action.type) {
    case types.REQUEST_DIRECTORY_LIST:
      newSpellDirectoryState = Object.assign({}, state, {
        isFetching: true
      });
      return newSpellDirectoryState;

    case types.RECEIVE_DIRECTORY_LIST:
      newSpellDirectoryState = Object.assign({}, state, {
        isFetching: false,
        spellList: action.spellList
      });
      return newSpellDirectoryState;
    default:
      return state;
  }
}

export default directoryReducer;
