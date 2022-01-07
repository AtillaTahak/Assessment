import React from 'react'
import { Todo } from './styled/app.styled'


function TodosList(props) {
    
    return (
        <Todo>
            {props.data.title}
        </Todo>
    )
}

export default TodosList
