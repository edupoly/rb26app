import React from 'react'
import axios from 'axios'
function Countries() {
    var [countries,setCountries]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries([...res.data])
        })
    },[])
    return (
        <div className='mybox'>
            <h1>Countries</h1>
            <ul>
                {
                    countries?.map((country)=>{
                        return <li>{country.name.common}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Countries