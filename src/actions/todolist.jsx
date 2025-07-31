export const createTodo = (text) => {
  return {
    type: 'CREATE_TODO',
    content: text,
  }
}

export const completedTodo = (id) => {
  return {
    type: 'COMPLETED_TODO',
    id: id,
  }
}
export const unfinishedTodo = (id) => {
  return {
    type: 'UNFINISHED_TODO',
    id: id,
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id,
  }
}
