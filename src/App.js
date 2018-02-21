import React, { Component } from 'react';
import './App.css';
import Logo from './logos/nezasa_logo_white.svg';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchFilter from './components/SearchFilter/SearchFilter.js';
import Countries from 'i18n-iso-countries';
import Locale from 'i18n-iso-countries/langs/en.json';
import AirportList from './components/AirportList/AirportList';
 
class App extends Component {
  constructor() {
    super();
    this.api = "https://crossorigin.me/https://embed-staging.nezasa.com/api1/airports";
    this.state = {queryParams:{useCOResponse: true, contentLang: "en"}, filter:"", search: "", airports: []};
    Countries.registerLocale(Locale);
    this.countries = Countries.getNames("en");
  };

  fetchAirports(callback) {
    if(this.state.search){
      var uri = "";
      var queryParams = Object.assign({}, this.state.queryParams);
      for (var param in queryParams) {
        uri += (Object.keys(queryParams).indexOf(param) === 0 ? "?" : "&") + `${param}=${queryParams[param]}`;
      }
      uri = `${this.api}${uri}&query=${this.state.search}`;
      fetch(uri)
      .then(response => response.json())
      .then(json => {
        var filteredJson = json.map((airport) => {
          return airport.airport;
        });
        this.setState({airports: filteredJson});
      }).catch((error) => {
        console.warn("Error while fetching for airports");
      }).finally(()=> {if (callback) callback();});
    }else{
      this.setState({airports: []});
      if (callback) callback();
    };
  };

  render() {
    return (
      <div className="App">
        <Header logo={Logo} alt={"Nezasa Logo"} contentLanguageHandler={(language) => this.setState({queryParams:{contentLang: language, useCOResponse: true}})} contentLanguage={this.state.queryParams.contentLang}/>
        <SearchBar fetchAirports={(searchInput, callback) => {this.setState({search: searchInput}); this.fetchAirports(callback)}} />
        <SearchFilter options={{name: "Airport Name", country: "Country Name", city: "City Name", iataCode: "IATA Code"}} searchByHandler={(option) => this.setState({filter: option})}/>
        <AirportList airports={this.state.airports} filter={this.state.filter} search={this.state.search}/>
      </div>
    );
  };
}

export default App;
