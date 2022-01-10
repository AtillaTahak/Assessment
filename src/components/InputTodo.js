import React, { useState,useEffect } from 'react'
import {AddButton,AddTodo} from './styled/input.styled'
import { useDispatch } from 'react-redux'
import { todoAction,todoPost } from '../redux/todo/index'


function InputTodo(props) {
    const [validation, setValidation] = useState(true);
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todo.trim()){
            dispatch(todoPost(todo))
            setTodo('');
        }else{
            setValidation(false);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <AddTodo type='text' value={todo} placeholder='Pls Write stuff to do' onChange={(e) => setTodo(e.target.value)} />
                <AddButton type='submit' value='Add To do' />
                <span data-testid="error">{validation ?'': ('you have to write stuff to do')} </span>

            </form>
        </div>
    )
}

export default InputTodo
