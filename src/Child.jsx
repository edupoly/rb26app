import React, { useEffect } from 'react'

function Child() {
    var [c,setC] = React.useState(0)
    useEffect(()=>{
        console.log('Child Component rendered')
    });
    function inc(){
        setC(c+1)
    }
    return (
        <div className='mybox'>
            <h1>Child:{c}</h1>
            <button onClick={()=>{inc()}}> Increment</button>
        </div>
    )
}

export default React.memo(Child)
// when props(values) to the component change React.memo() with allow the Child to render again