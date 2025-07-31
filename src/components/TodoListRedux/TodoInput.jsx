import { useDispatch } from 'react-redux'
import { createTodo } from '../../actions/todolist'
import { useEffect, useRef } from 'react'

function TodoInput() {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.elements.content.value != '') {
      dispatch(createTodo(e.target.elements.content.value))
      inputRef.current.value = ''
    }
  }
  return (
    <>
      <div className="todo__input">
        <form action="" onSubmit={handleSubmit}>
          <input ref={inputRef} name="content" type="text" />
          <button type="submit">+</button>
        </form>
      </div>
    </>
  )
}

export default TodoInput
