import React from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
function Countries2() {
    var [countries,setCountries]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries([...res.data])
        })
    },[])
    return (
        <div className='mybox'>
            <h1>Countries2</h1>
            <div style={{display:'flex'}}>
                <ul style={{padding:'10px',width:'30%'}}>
                    {
                        countries?.map((country)=>{
                            return  <li >
                                        <Link to={`countryDetails/${country.name.common}`}>{country.name.common}</Link>
                                    </li>
                        })
                    }
                </ul>
                <div style={{padding:'10px',width:'60%'}}>
                    <h1>Country Details come here</h1>
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    )
}

export default Countries2