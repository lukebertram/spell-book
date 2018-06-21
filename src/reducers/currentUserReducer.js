import constants from './../constants';
const { initialState, types } = constants;

const currentUserReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.SET_USER:
      return action.newCurrentUser;
    default:
      return state;
  }
};

export default currentUserReducer;
