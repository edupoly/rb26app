import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails() {
    var res = useParams();
    var [details,setDetails]=useState(null)
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3/name/${res.cname}`)
        .then((result)=>{
            console.log(result)
            setDetails({...result.data[0]})
        })
    },[res.cname])
    return (
        <div className='mybox'>
            <h1>CountryDetails</h1>
            <h2>{res.cname}</h2>
            <h3>{details && details.capital[0]}</h3>
            <img src={details && details.flags[1]} alt="" />
        </div>
    )
}

export default CountryDetails