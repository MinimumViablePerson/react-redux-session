export const showModalReducer = (
  showModal = false,
  action = { type: 'SOME_TYPE', payload: '' }
) => {
  switch (action.type) {
    case 'MODAL_SHOW':
      return true
    case 'MODAL_HIDE':
      return false
    default:
      return showModal
  }
}
