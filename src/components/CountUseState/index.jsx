import { useState } from 'react'

function CountState() {
  const [count, setCount] = useState(0)
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        down
      </button>
      <button
        onClick={() => {
          setCount(0)
        }}
      >
        reset
      </button>
      <div>Ket qua: {count}</div>
    </>
  )
}

export default CountState
