import React, { useState } from 'react';
import { useEffect } from 'react';

const Dropdown = ({ countries, getCountryInfo }) => {

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountrySelection = (e) => {
        setSelectedCountry(e.target.value)
    }

    const returnCountryInfo = () => {
        const foundCountry = countries.find(country => country.name === selectedCountry)
        getCountryInfo(foundCountry)
    }

    useEffect(() => returnCountryInfo(), [selectedCountry])

    return (
        <select onChange={handleCountrySelection} name="countries" id="countries">
            <option value="" select>Select the country</option>
            {countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
        </select>
    )
}

export default Dropdown;