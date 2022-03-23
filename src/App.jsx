import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { Buttons } from './components/Buttons'
import { Display } from './components/Display'
import { Todos } from './components/Todos'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(todosFromServer =>
        dispatch({ type: 'SET_TODOS', payload: todosFromServer })
      )
  }, [])

  return (
    <div className='App'>
      <Display />
      <Buttons />
      <Todos />
    </div>
  )
}

export default App
