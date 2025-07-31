import { useDispatch, useSelector } from 'react-redux'
import { down, reset, up } from '../../actions/counter'

function CounterRedux() {
  const counter = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()
  return (
    <>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(up())}>up</button>
      <button onClick={() => dispatch(down())}>down</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}

export default CounterRedux
