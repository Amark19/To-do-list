import React from 'react'
import {TodosItem} from './TodosItem';
export const Todos = (props) => {
    return (
        <div className="container col-md-6">
            <h3 className="">Todos list</h3>
            {props.todos.length==0? "No todos remain" :
            props.todos.map((todo)=>{

            return <TodosItem todo={todo} onDelete={props.onDelete}/>
            })
            }
            
        </div>
    )
}
