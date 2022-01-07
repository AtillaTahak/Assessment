import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import InputTodo from './components/InputTodo'
import TodosList from './components/TodosList'
import { todoAction, addTodo } from './redux/todo/index'
import { v4 as uuidv4 } from 'uuid'
import { Container } from './components/styled/app.styled'

function App() {
  const state = useSelector(state => state.todo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoAction())
  }, [dispatch])



  const addTodos = title => {
    const newTodo = { id: uuidv4(), title: title, completed: false };
    dispatch(addTodo(newTodo));

  }

  return (
    <Container>
      <h1>To Do List</h1>
      <InputTodo addTodos={addTodos} />
        {state.data && state.data.map((e) => (
          <TodosList data={e} key={e.id} />
        ))}
    </Container>
  );
}

export default App;
