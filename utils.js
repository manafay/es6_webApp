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
