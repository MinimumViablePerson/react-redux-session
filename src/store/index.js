import { combineReducers, createStore } from 'redux'
import { countReducer } from './count'
import { showModalReducer } from './showModal'
import { todosReducer } from './todos'

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer,
  showModal: showModalReducer
})

export const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
