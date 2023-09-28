import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Countries() {
    var [countries,setCountries]=useState([]);
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all")
        .then((res)=>{
            setCountries([...res.data])
        })
    },[])
    return (
        <div className='mybox'>
            <h1>Countries</h1>
            {
                countries && countries.map((c)=>{
                    return <li>{c.name.common}</li>
                })
            }
        </div>
    )
}

export default Countries