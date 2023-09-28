import React, { useState,useEffect } from 'react'
function Student() {
    var[student,setStudent]=useState({
        firstname:'praveen',
        lastname:'gubbala',
        age:40
    })
    function incAge(){
        setStudent({...student,age:student.age+1})
    }
    useEffect(()=>{console.log("this is useEffect with empty dep array")},[])
    useEffect(()=>{console.log("this is useEffect with no dep array")})
    function decAge(){}
    return (
        <div className='mybox'>
            <h1>Student</h1>
            <h2>Firstname:{student.firstname}</h2>
            <h2>Lastname:{student.lastname}</h2>
            <h2>Age:{student.age}</h2>
            <button onClick={()=>{incAge()}}>Inc Age</button>
            <button onClick={()=>{decAge()}}>Dec Age</button>
        </div>
    )
}

export default Student
//mounting
//updation
//unmounting