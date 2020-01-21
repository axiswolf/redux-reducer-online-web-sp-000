let state = {numberOfPresents: 0}
export function managePresents(state, action){
  switch (action.type){
    case 'INCREATE_COUNT':
      return {numberOfPresents: state.count + 1}
    case 'DECREASE_COUNT':
      return {numberOfPresents: state.count - 1}
    default:
      return state;
  }
}
