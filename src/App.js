import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import CountryInfo from './components/CountryInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCountryInfo: {},
    }
  }

  fetchData = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }

  componentDidMount() {
    this.fetchData()
  }

  getCountryInfo = (countryInfo) => {
    this.setState({ selectedCountryInfo: countryInfo })
  }

  render() {
    const { selectedCountryInfo, data } = this.state;
    return (
      <div className="App" >
        <Dropdown getCountryInfo={this.getCountryInfo} countries={data}/>

        {/* initial state value of selectedCountryInfo is empty object */}
        {selectedCountryInfo && <CountryInfo info={selectedCountryInfo} />}
      
      </div>
    );
  }

}

export default App;
