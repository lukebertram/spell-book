const middlewareLogger = store => next => action => {
  console.log('OriginalState: ', store.getState());
  console.log('Current Action: ', action);
  next(action);
  console.log('New Updated State: ', store.getState());
};

export default middlewareLogger;
