export function selectState(usstate) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'STATE_SELECTED',
    payload: usstate
  };
}
