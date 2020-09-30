import { reactive } from 'vue';

export const userState = <T extends object>(initState: T) => {
  const state = reactive(initState);

  function setState(payload: Partial<T>) {
    Object.assign(state, payload);
  }

  function nextState(fn: (stateData: typeof state) => void) {
    fn(state);
  }

  return {
    state,
    setState,
    nextState,
  };
};
