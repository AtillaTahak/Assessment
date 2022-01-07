import React, { useState } from 'react'
import {AddButton,AddTodo} from './styled/input.styled'

function InputTodo(props) {
    const [todo, setTodo] = useState('');
    const [validation, setValidation] = useState(true);



    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todo.trim()){
            props.addTodos(todo);
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
