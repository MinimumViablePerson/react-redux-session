import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export function Todos () {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: 'ADD_TODO', payload: e.target.title.value })
          e.target.reset()
        }}
      >
        <input type='text' name='title' />
        <button>ADD TODO</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>
            {todo.title}{' '}
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_TODO', payload: todo.title })
              }}
            >
              X
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}
