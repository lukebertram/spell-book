import constants from './../constants';
const { initialState, types } = constants;

const selectedCharacterReducer = (state = initialState.selectedCharacter, action) => {
  switch (action.type) {
    case types.SELECT_CHARACTER:
      //return action.newSelectedSpellName;
      return action.newSelectedCharacter;
    default:
      return state;
  }
};

export default selectedCharacterReducer;
