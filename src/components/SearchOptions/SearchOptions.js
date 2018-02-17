import React, {Component} from 'react';
import './SearchOptions.css';


class SearchOptions extends Component {
    constructor(props){
        super(props);
        this.state = {}
        for(var key in props.options){
            this.state[key] = false
        }
    }

    getOptions(options) {
        var optionsToRender = [];
        for(var key in options){
            optionsToRender.push(<label key={key} onClick={(event) => this.optionHandler(event)} data-value={key} className={`Option ${this.state[key] ? "Selected" : ""}`}>{options[key]}</label>)
        };
        return optionsToRender;
    }

    optionHandler(event) {
        var currentState = Object.assign({}, this.state);
        var current = event.target.dataset.value
        for(var key in currentState){
            if(key !== current) {
                currentState[key] = false;
            }
        }
        currentState[current] = !currentState[current];
        this.props.searchByHandler(currentState[current] ? current : "");
        this.setState(currentState);

    };

    render() {
        return (
            <div className="SearchOptions">
                {this.getOptions(this.props.options)}
            </div>
        );
    };
}

export default SearchOptions;