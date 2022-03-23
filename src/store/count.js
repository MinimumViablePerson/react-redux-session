export const countReducer = (
  count = 0,
  action = { type: 'SOME_TYPE', payload: 0 }
) => {
  switch (action.type) {
    case 'UP':
      return count + 1
    case 'DOWN':
      return count > 0 ? count - 1 : count
    case 'RESET':
      return 0
    case 'UP_BY_X':
      return count + action.payload
    default:
      return count
  }
}
