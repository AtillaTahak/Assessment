import React from 'react'
import { Todo } from './styled/app.styled'


function TodosList(props) {
    
    return (
        <Todo key={props.data._id} >
            {props.data.title}
        </Todo>
    )
}

export default TodosList
