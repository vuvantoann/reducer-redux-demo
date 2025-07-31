import CountUseReducer from './components/CountUseReducer'
import CountUseState from './components/CountUseState'
import CounterRedux from './components/CounterRedux'
import TodoListUseReducer from './components/TodoListUseReducer'
function App() {
  return (
    <>
      <CountUseState />
      <CountUseReducer />
      <TodoListUseReducer />
      <CounterRedux />
    </>
  )
}

export default App
