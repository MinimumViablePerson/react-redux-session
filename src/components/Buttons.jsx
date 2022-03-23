import { useDispatch } from 'react-redux'

export function Buttons () {
  const dispatch = useDispatch()

  return (
    <>
      <button
        className='down-btn'
        onClick={() => {
          dispatch({ type: 'DOWN' })
        }}
      >
        -
      </button>
      <button
        className='up-btn'
        onClick={() => {
          dispatch({ type: 'UP' })
        }}
      >
        +
      </button>
      <button
        className='upBy10-btn'
        onClick={() => {
          dispatch({ type: 'UP_BY_X', payload: 10 })
        }}
      >
        +10
      </button>
      <button
        className='upBy150-btn'
        onClick={() => {
          dispatch({ type: 'UP_BY_X', payload: 150 })
        }}
      >
        +150
      </button>
      <button
        className='reset-btn'
        onClick={() => {
          dispatch({ type: 'RESET' })
        }}
      >
        RESET
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'CLEAR_ALL_TODOS' })
        }}
      >
        CLEAR TODOS
      </button>
    </>
  )
}
