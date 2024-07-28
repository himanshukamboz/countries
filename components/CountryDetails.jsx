import React, { useContext, useEffect, useState } from "react";
import "./Country.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Shimmer from "./shimmerdetail";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CountryDetail() {
  const params = useParams();
  const {state} = useLocation();
  const [isDark] = useContext(ThemeContext); 
  const countryname = params.country;
  const [error, seterror] = useState(false);
  const [CountryData, setcountrydata] = useState(null);
  function usedata(data){
    setcountrydata({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      flags: data.flags.svg,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      borders:[]
    });
    if (!data.borders){
      return [];
    }
    Promise.all(data.borders.map((border)=>{
     return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=>res.json())
      .then(([bordercountry])=>bordercountry.name.common)
      .catch((bordererror)=>{
        return null;
      })
    }))
    .then((borders)=>{
      setcountrydata((prevState)=>({...prevState,borders:borders.filter((border)=>border!==null)}))
    })
  } 
  
  useEffect(() => {
    if (state){
      usedata(state);
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
       usedata(data)
      })
      .catch((err) => seterror(true));
  }, [countryname]);

  if (error) {
    return (
      <h1
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Check Your Internet Connection!!!
      </h1>
     
    );
  }
  return CountryData === null ? (
    <Shimmer />
  ) : (
    <>
      <main className={isDark ?"dark" : " "}>
        <Link to="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </Link>
        <div className="country-details">
          <img src={CountryData.flags} alt={CountryData.name} />
          <div className="details-text-container">
            <h1>{CountryData.name}</h1>
            <div className="details-text">
              <div>
                <p>
                  <b>Native Name: </b>
                  {CountryData.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {CountryData.population.toLocaleString("en-IN")}
                </p>
                <p>
                  <b>Region: </b>
                  {CountryData.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {CountryData.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {CountryData.capital.join(", ")}
                </p>
              </div>
              <div>
                <p>
                  <b>Top Level Domain: </b>
                  {CountryData.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {CountryData.currencies}
                </p>
                <p>
                  <b>Language: </b>
                  {CountryData.languages}
                </p>
              </div>
            </div>
         { CountryData.borders.length !== 0 && <div className="border-countries">
           <p>
              <b>Border Countries: </b>
              {CountryData.borders.map((e) => (
                <Link key={e} to={`/${e}`}>{e}</Link>
              ))}
            </p>
          </div>}
          </div>
        </div>
      </main>
    </>
  );
}
