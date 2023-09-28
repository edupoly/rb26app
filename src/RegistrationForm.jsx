import React,{useEffect, useRef} from 'react'
import Address from './Address';

function RegistrationForm() {
    var firstnameRef = useRef();
    var lastnameRef = useRef();
    var addressRef = useRef();
    useEffect(()=>{
        firstnameRef.current.focus();
    },[])
    function focusLastname(e){
        if(e.key==='Enter'){
            lastnameRef.current.focus()
        }
    }
    function focusAddress(e){
        if(e.key==='Enter'){
            addressRef.current.focus()
        }
    }
    return (
        <div className='mybox'>
            <h1>RegistrationForm</h1>
            <input type="text" ref={firstnameRef} placeholder='enter your firstname' onKeyUp={(e)=>{focusLastname(e)}}/>
            <br />
            <input type="text" ref={lastnameRef} placeholder='enter your lastname' onKeyUp={(e)=>{focusAddress(e)}}/>
            <br />
            <Address ref={addressRef}></Address>
        </div>
  )
}

export default RegistrationForm