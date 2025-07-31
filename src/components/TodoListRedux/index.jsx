import TodoContent from './TodoContent'
import TodoInput from './TodoInput'

function TodoListRedux() {
  return (
    <>
      <div className="todo__list">
        <TodoInput />
        <TodoContent />
      </div>
    </>
  )
}

export default TodoListRedux
