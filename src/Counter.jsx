import React from 'react';
function Counter(){
    var [c,setC]=React.useState(10)
    return(
        <div style={{border:'1px solid',margin:'10px',padding:'10px'}}>
            <h1>Counter:{c}</h1>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}
export default Counter;