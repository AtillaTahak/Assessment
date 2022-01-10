import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import InputTodo from './components/InputTodo'
import TodosList from './components/TodosList'
import { todoAction  } from '../src/redux/todo/index'
import { Container } from './components/styled/app.styled'

function App() {
  const state = useSelector(state => state.todo);
  const reverseState = state.data.slice().reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoAction())

  }, [state.data.length])


  return (
    <Container>
      <h1>To Do List</h1>
      <InputTodo />
        {reverseState && reverseState.map((e) => (
          <TodosList data={e} key={e._id} />
        ))}
    </Container>
  );
}

export default App;
