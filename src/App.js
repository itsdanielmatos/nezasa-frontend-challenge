import React, { Component } from 'react';
import './App.css';
import Logo from './logos/nezasa_logo_white.svg';
import Header from './components/Header/Header.js';

class App extends Component {
  constructor() {
    super();
    this.state = {contentLanguage: "en"};
  };

  render() {
    return (
      <div className="App">
        <Header logo={Logo} alt={"Nezasa Logo"} contentLanguageHandler={(language) => this.setState({contentLanguage: language})} contentLanguage={this.state.contentLanguage}/>
      </div>
    );
  };
}

export default App;
