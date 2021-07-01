import React from 'react'

export const TodosItem = (props) => {
    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-secondary" onClick={function(){props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}

