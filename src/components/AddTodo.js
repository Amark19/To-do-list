import React from 'react'
import  { useState } from 'react';
export const AddTodo = (props) => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const submit=(e)=>{
        
        e.preventDefault();
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container my-3 col-md-6">
        <h3>Add Todo</h3>
        <form onSubmit={submit}>
        <div className="form-group">
          <label >Todo Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" required/>

        </div>
        <div className="form-group">
          <label >Todo Description</label>
          <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" required/>
        </div>
     
        <button type="submit"  className="btn btn-secondary my-4">Add Todo</button>
      </form>
      </div>
    )
}
