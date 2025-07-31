import { useReducer } from 'react'
const reducer = (state, action) => {
  switch (action) {
    case 'UP':
      return state + 1
    case 'DOWN':
      return state - 1
    case 'RESET':
      return 0
    default:
      return state
  }
}
function CountUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <button onClick={() => dispatch('UP')}>up</button>
      <button onClick={() => dispatch('DOWN')}>down</button>
      <button onClick={() => dispatch('RESET')}>reset</button>
      <div>Ket qua:{count} </div>
    </>
  )
}

export default CountUseReducer
