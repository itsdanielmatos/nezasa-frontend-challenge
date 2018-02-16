import React, { Component } from 'react';
import './App.css';
import Logo from './logos/nezasa_logo_white.svg';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.api = "https://embed-staging.nezasa.com/api1/airports";
    this.state = {useCOResponse: true, contentLanguage: "en"};
  };

  fetchAirports(searchInput, callback) {
    var query = ""
    var queryParams = Object.assign({}, this.state)
    for (var param in queryParams) {
      query += (Object.keys(queryParams).indexOf(param) === 0 ? "?" : "&") + `${param}=${queryParams[param]}`;
    }
    fetch(`${this.api}${query}&query=${searchInput}`)
    .then(response => response.json())
    .then(json => {console.log(json); callback()});
  };

  render() {
    return (
      <div className="App">
        <Header logo={Logo} alt={"Nezasa Logo"} contentLanguageHandler={(language) => this.setState({contentLanguage: language})} contentLanguage={this.state.contentLanguage}/>
        <SearchBar fetchAirports={(searchInput, callback) => this.fetchAirports(searchInput, callback)} />
      </div>
    );
  };
}

export default App;
