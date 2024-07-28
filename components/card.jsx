import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({name,flag,pop,region,capital,data}) {
    
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
        <img src={flag} alt={name} />
        <div className="card-text">
            <h3>{name}</h3>
            <p><b>Population: </b>{pop}</p>
            <p><b>Region: </b>{region}</p>
            <p><b>Capital: </b>{capital}</p>
        </div>
    </Link>
  )
}
