let state = {numberOfPresents: 0}
export function managePresents(state, action){
  switch (action.type){
    case 'INCREASE':
      return {numberOfPresents: state.count + 1}
    default:
      return state;
  }
}
