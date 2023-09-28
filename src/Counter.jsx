import React, { useState } from 'react'

function Counter() {
    var [count,setCount]=useState(1)
    function inc(){
        setCount(count+1)
        setCount(count+1)

        // setCount((p)=>{return p+1})
        // setCount((p)=>{return p+1})
    }
    function dec(){
        setCount(count-1)
    }
  return (
    <div className='mybox'>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>

    </div>
  )
}

export default Counter