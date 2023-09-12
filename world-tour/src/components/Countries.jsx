import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>countries: {countries.length}</h1>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>
                    // console.log(country) 
                    // here left side country is object name and right side country is object. right side is determinde based on what type of data do you want
                )
            }
        </div>
    );
};

export default Countries;