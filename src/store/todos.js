export const todosReducer = (
  todos = [{ title: 'Buy milk', completed: false }],
  action = { type: '', payload: [] }
) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        title: action.payload,
        completed: false
      }
      return [...todos, newTodo]
    case 'REMOVE_TODO':
      return todos.filter(todo => todo.title !== action.payload)
    case 'SET_TODOS':
      return [...todos, ...action.payload]
    case 'CLEAR_ALL_TODOS':
      return []
    default:
      return todos
  }
}
