import React from 'react';
import './Header.css';
import ContentLanguageList from '../ContentLanguageList/ContentLanguageList.js';

const Header = ({logo, alt, contentLanguageHandler, contentLanguage}) => {
    return(
        <div className="Header">
            <img className="Logo" src={logo} alt={alt} />
            <ContentLanguageList languages={["EN", "DE"]} contentLanguageHandler={(language) => contentLanguageHandler(language)} contentLanguage={contentLanguage} />
        </div>
    );
};

export default Header;