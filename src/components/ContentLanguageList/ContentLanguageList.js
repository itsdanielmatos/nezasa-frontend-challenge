import React from 'react';
import './ContentLanguageList.css';

const ContentLanguageSelector = ({languages, contentLanguageHandler, contentLanguage}) => {
    const languageSelectHandler = (event) => {
        contentLanguageHandler(event.target.innerText.toLowerCase());
    };

    const getLanguages = (languages) => {
        return languages.map((language, index) => {
           return <div key={index} className={`Language ${contentLanguage === language.toLowerCase() ? "Selected" : ""}`} onClick={(event) => languageSelectHandler(event)}>{language}</div>
        });
    };

    return (
        <div className="ContentLanguageSelector">
            {getLanguages(languages)}
        </div>
    );
};

export default ContentLanguageSelector;