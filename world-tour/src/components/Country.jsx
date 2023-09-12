const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    // here country is an object came from Countries component
    return (
        <div style={{border: '2px solid salmon', margin:'3px'}}>
            <h3>name: {name?.common}</h3>
            <div><img src={flags?.png} alt={flags?.alt} /></div>
        </div>
    );
};

export default Country;