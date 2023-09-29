import React,{useCallback, useEffect, useState,useMemo} from 'react'
import Child from './Child'

function Parent() {
    var [p,setP]=useState(10);
    var ar = useMemo(()=>{
        return [12,34,45]
    },[])
    useEffect(()=>{
        console.log('Parent Component rendered')
    });
    function inc(){
        setP(p+10)
    }
    var pagal=useCallback(()=>{
        console.log("its ok leave it....")
    },[])
  return (
    <div className='mybox'>
        <h1>Parent:{p}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <Child x={p%100===0?p:0} fn={pagal} a1={ar}></Child>
    </div>
  )
}

export default Parent
// useState,useEffect,useRef,useMemo,useCallback
// useReducer,useContext....