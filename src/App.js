import React, { Component } from 'react';
import './App.css';
import Logo from './logos/nezasa_logo_white.svg';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchFilter from './components/SearchFilter/SearchFilter.js';
import Countries from 'i18n-iso-countries';
import Locale from 'i18n-iso-countries/langs/en.json';
 
class App extends Component {
  constructor() {
    super();
    this.api = "https://embed-staging.nezasa.com/api1/airports";
    this.state = {queryParams:{useCOResponse: true, contentLanguage: "en"}, filter:""};
    Countries.registerLocale(Locale);
    this.countries = Countries.getNames("en");
  };

  fetchAirports(searchInput, callback) {
    var uri = "";
    var queryParams = Object.assign({}, this.state.queryParams);
    for (var param in queryParams) {
      uri += (Object.keys(queryParams).indexOf(param) === 0 ? "?" : "&") + `${param}=${queryParams[param]}`;
    }
    uri = `${this.api}${uri}&query=${searchInput}`
    console.log(uri);
    fetch(uri)
    .then(response => response.json())
    .then(json => {console.log(json); callback()});
  };

  render() {
    return (
      <div className="App">
        <Header logo={Logo} alt={"Nezasa Logo"} contentLanguageHandler={(language) => this.setState({queryParams:{contentLanguage: language}})} contentLanguage={this.state.queryParams.contentLanguage}/>
        <SearchBar fetchAirports={(searchInput, callback) => this.fetchAirports(searchInput, callback)} />
        <SearchFilter options={{airport: "Airport Name", country: "Country Name", city: "City Name", iataCode: "IATA Code"}} searchByHandler={(option) => this.setState({filter: option})}/>
      </div>
    );
  };
}

export default App;
