import { combineReducers } from 'redux'
import counterReducer from './Counter'
import todoReducer from './Todo'
const allReducers = combineReducers({
  counterReducer,
  todoReducer,
})

export default allReducers
