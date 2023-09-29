import React from 'react'
import Third from './Third'
import { MyContext } from './Context/MyContext'
function Second() {
  return (
    <MyContext.Consumer>
        {
            (details)=>{
                return(
                    <div className='mybox'>
                        <h1>Second</h1>
                        <h2>Firstname:{details.firstname}</h2>
                        <h2>Firstname:{details.lastname}</h2>
                        <Third></Third>
                    </div>
                )
            }
        }
    </MyContext.Consumer>
  )
}

export default Second