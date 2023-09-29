import React, { useContext } from 'react'
import { MyContext } from './Context/MyContext';
function Third() {
    var details = useContext(MyContext);

  return (
    <div className='mybox'>
        <h1>Third</h1>
        <h2>Firstname:{details.firstname}</h2>
        <h2>Firstname:{details.lastname}</h2>
    </div>
  )
}

export default Third