let state = {friends: [
  {
    name: 'Avi',
    hometown: 'NYC',
    id: 100
    }
  ],
}
export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {}
    case 'REMOVE_FRIEND':
      return {}
    default:
      return state;
  }
}
