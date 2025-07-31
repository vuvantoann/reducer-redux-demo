import { useEffect, useReducer, useRef } from 'react'

let courseList = [
  {
    id: 1,
    title: 'hoc JavaScript',
  },
  {
    id: 2,
    title: 'hoc ReactJs',
  },
  {
    id: 3,
    title: 'hoc NodeJs',
  },
]

function TodoListUseReducer() {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  //initialize and use useReducer
  const reducer = (state, action) => {
    // CREATE
    switch (action.type) {
      case 'CREATE':
        return [
          ...state,
          {
            id: Date.now(),
            title: action.value,
          },
        ]

      case 'DELETE':
        let newSate = state.filter((item) => {
          return item.id != action.value
        })
        return newSate
      default:
        return state
    }
  }
  const [todoList, dispatch] = useReducer(reducer, courseList)
  // handle form
  const handleSubmit = (e) => {
    e.preventDefault()
    let value = e.target[0].value
    dispatch({
      type: 'CREATE',
      value: value,
    })

    inputRef.current.value = ''
  }
  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE',
      value: id,
    })
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button>add</button>
      </form>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <span>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoListUseReducer
