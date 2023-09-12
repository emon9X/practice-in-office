import { useState } from "react";

const Country = ({country, handlevisiteCountries}) => {
    // console.log(country);
    const {name, flags} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited); /*toggling*/
    }
const passWithParams = () => handlevisiteCountries(country);
    // console.log(handlevisiteCountries);
    // here country is an object came from Countries component
    return (
        <div className={`country ${visited && 'visited'}`} style={{border: '2px solid salmon', margin:'3px', color: visited ?'purple' : 'salmon'}}>
            <h3>name: {name?.common}</h3>
            <div style={{height:'50%'}}><img src={flags?.png} alt={flags?.alt} /></div>
            <button onClick={passWithParams}>mark visited</button>
            <br />
            <button onClick={handleVisited}>visited</button>
            {visited && 'i have visited this country'}
        </div>
    );
};

export default Country;