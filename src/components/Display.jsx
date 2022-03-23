import { useSelector } from 'react-redux'

export function Display () {
  const count = useSelector(state => state.count)
  return <h1 className='display'>{count}</h1>
}
