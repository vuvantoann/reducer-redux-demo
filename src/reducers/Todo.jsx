const init = [
  {
    id: 1,
    content: 'san pham 1',
    complete: false,
  },
  {
    id: 2,
    content: 'san pham 2',
    complete: false,
  },
  {
    id: 3,
    content: 'san pham 3',
    complete: false,
  },
]

function todoReducer(state = init, action) {
  let newState = [...state]
  switch (action.type) {
    case 'CREATE_TODO':
      newState = [
        ...state,
        {
          id: Date.now(),
          content: action.content,
          complete: false,
        },
      ]
      return newState
    case 'COMPLETED_TODO':
      const indexCompleted = newState.findIndex((item) => {
        return item.id === action.id
      })
      newState[indexCompleted].complete = true
      return newState
    case 'UNFINISHED_TODO':
      const indexUnfinished = newState.findIndex((item) => {
        return item.id === action.id
      })
      newState[indexUnfinished].complete = false
      return newState
    case 'DELETE_TODO':
      const deleteState = newState.filter((item) => {
        return item.id !== action.id
      })
      console.log(deleteState)
      return deleteState
    default:
      return state
  }
}

export default todoReducer
