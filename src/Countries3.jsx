import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Countries3() {
    var [countries,setCountries]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries([...res.data])
        })
    },[])
    return (
        <div className='mybox'>
            <h1>Countries3</h1>
            <ul>
                {
                    countries?.map((country)=>{
                        return <li><Link to={`/countryDetails3`} state={country}>{country.name.common}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Countries3