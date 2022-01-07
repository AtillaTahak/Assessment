import React, { useState } from 'react'

function InputTodo(props) {
    const [todo, setTodo] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todo.trim()){
            props.addTodos(todo);
        }else{
            alert('Pls write item');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type='text' value={todo} placeholder='Pls Write stuff to do' onChange={(e) => setTodo(e.target.value)} />
                <input type='submit' value='Add To do' />
            </form>

        </div>
    )
}

export default InputTodo
