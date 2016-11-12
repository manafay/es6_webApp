
function createAction(actionType) {
  const action = {};
  if (actionType) {
    action.type = actionType;
  }
  return action;
}

const action = (actionType) => createAction(actionType);

export const dispatch = (actionType) => action(actionType);

let globalState = { count: 0 };

export const getState = () => globalState;

export const setState = (state) => {
  globalState = state;
};

export function reducer(prevState, currentAction) {
  switch (currentAction.type) {
    case 'INCREMENT':
      return { count: prevState.count + 2 };
    case 'DECREMENT':
      return { count: prevState.count - 2 };
    default:
      return prevState;
  }
}

export function createStore(state) {
  const oldState = getState();
  return setState(Object.assign({}, oldState, state));
}
