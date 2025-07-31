import { useDispatch, useSelector } from 'react-redux'
import './todoList.css'
import {
  completedTodo,
  deleteTodo,
  unfinishedTodo,
} from '../../actions/todolist'
function TodoContent() {
  const listItem = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch()
  return (
    <>
      <ul className="list__content">
        {listItem.map((item) => {
          return (
            <li
              key={item.id}
              className={'list__item' + (item.complete && ' list__item--dash')}
            >
              {item.content}

              {item.complete ? (
                <button onClick={() => dispatch(unfinishedTodo(item.id))}>
                  u
                </button>
              ) : (
                <button onClick={() => dispatch(completedTodo(item.id))}>
                  v
                </button>
              )}
              <button onClick={() => dispatch(deleteTodo(item.id))}>x</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoContent
