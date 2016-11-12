
function createAction(actionType) {
  const action = {};
  if (actionType) {
    action.type = actionType;
  }
  return action;
}

const action = (actionType) => createAction(actionType);

const dispatch = (event) => action(event);

let globalState = { count: 0 };

const getState = () => globalState;

const setState = (state) => {
  globalState = state;
  return globalState;
};

function compareState(oldState, currentState) {
  if (oldState !== currentState) {
    return currentState;
  }
  return oldState;
}

function createStore(state) {
  const oldState = getState();
  const newState = { ...oldState, ...state };
  Object.keys(oldState).forEach((key) => {
    if (Object.keys(state).includes(key)) {
      newState[`${key}`] = compareState(oldState[key], state[key]);
    } else {
      newState[`${key}`] = oldState[key];
    }
  });
  return setState(newState);
}


console.log(getState());
console.log(setState({ count: 4 }));
console.log(getState());
console.log(createStore({ count: 5 }));
console.log(getState());
console.log(dispatch(undefined));
