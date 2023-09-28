import React, { useEffect, useRef } from 'react'

function Regform() {
    var firstnameRef=useRef()
    useEffect(()=>{
        firstnameRef.current.focus();
    },[])
  return (
    <div className='mybox'>
        <h1>Regform</h1>
        <input type="text" placeholder='Enter Firstname' ref={firstnameRef}/>
    </div>
  )
}

export default Regform