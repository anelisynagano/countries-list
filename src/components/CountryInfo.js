import React from 'react';

const CountryInfo = ({ info }) => {
    return (
        <>
            <p>{info.name}</p>
            <p>{info.population}</p>
        </>
    )
}

export default CountryInfo;