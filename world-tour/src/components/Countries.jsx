import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Style.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handlevisiteCountries = (country) => {
        console.log('add this to your visited country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h1>countries: {countries.length}</h1>
            <div>
                <h5>visited countries {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country?.name?.common}</li>)
                    }
                </ul>
            </div>
            <div className="container">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handlevisiteCountries={handlevisiteCountries}></Country>
                        // console.log(country) 
                        // here left side country is object name and right side country is object. right side is determinde based on what type of data do you want
                    )
                }
            </div>
        </div>
    );
};

export default Countries;