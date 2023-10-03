import React, { useReducer, useState } from 'react'
function reducer(state,action){
    if(action.type==='ADDTODO'){
        return {todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETETODO'){
        var temp = [...state.todos];
        temp.splice(action.payload,1);
        return {todos:[...temp]}
    }
    return state
}
function Todolist() {
    var [state,dispatch]=useReducer(reducer,{todos:['clear bills','clean car','get toy for moksha']})
    var [newtask,setNewTask]=useState('')
    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <ul>
                <input type="text" onChange={(e)=>{setNewTask(e.target.value)}}/>
                <button onClick={()=>{dispatch({type:'ADDTODO',payload:newtask})}}>Add Task</button>
                {
                    state.todos.map((t,i)=>{
                        return  <li>
                                    {t}
                                    <button onClick={()=>{dispatch({type:'DELETETODO',payload:i})}}>Delete</button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todolist