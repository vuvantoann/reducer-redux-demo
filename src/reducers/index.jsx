import { combineReducers } from 'redux'
import counterReducer from './Counter'
const allReducers = combineReducers({
  counterReducer,
})

export default allReducers
