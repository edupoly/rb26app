import React from 'react'
import { useLocation } from 'react-router-dom'

function CountryDetails3() {
    var x = useLocation();
    console.log(x)
  return (
    <div className='mybox'>
        <h1>CountryDetails3</h1>
        <h2>{x.state.name.common}</h2>
        <h2>{x.state.capital[0]}</h2>
    </div>
  )
}

export default CountryDetails3