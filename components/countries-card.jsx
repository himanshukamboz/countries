import React, { useEffect, useState } from 'react'
import Card from './card';
import Shimcontainer from './shimcontainer';
export default function Countrycards({query,region}) {
    const [countriesdata,setcountriesdata]=useState([]);
    useEffect(()=>{fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
      setcountriesdata(data);
    }).catch((err)=>{
      return <h1>No Internet</h1>
    })},[]);
    if(!countriesdata.length){
      return <Shimcontainer/>
    }
    
    const countriesinfo = countriesdata.filter(e=>{
      const searchbyname = query ? e.name.common.toLowerCase().includes(query):true;
      const searchbyregion = region ? e.region.toLowerCase().includes(region):true; 
      return  searchbyname && searchbyregion;
    }).map(e=>{
    return <Card key={e.name.common} name={e.name.common} flag={e.flags.svg} pop={e.population.toLocaleString('en-IN')} region={e.region} capital={e.capital?.[0]} data={e}/>
  }
  )
  return (
    <div className="card-container">
      {countriesinfo}
    </div>
  )
}
