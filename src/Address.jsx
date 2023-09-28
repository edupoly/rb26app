import React from 'react'

var Address=React.forwardRef((props,r1)=>{
    console.log(props,r1)
    return (
      <div className='mybox'>
          <h4>Address</h4>
          <input type="text" placeholder='Enter your Hno.' ref={r1}/>
      </div>
    )
  })

export default Address