import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type==='INCREMENT'){
        return {count:state.count+1}
    }
    if(action.type==='DECREMENT'){
        return {count:state.count-1}
    }
    if(action.type==='RESET'){
        return {count:0}
    }
    return state
}
function Counter() {
    var [state,dispatch]=useReducer(reducer,{count:0})
    return (
        <div className='mybox'>
            <h1>Counter:{state.count}</h1>
            <button onClick={()=>{dispatch({type:'INCREMENT'})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}

export default Counter