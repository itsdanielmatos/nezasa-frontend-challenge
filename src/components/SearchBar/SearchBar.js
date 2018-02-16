import React, {Component} from 'react';
import './SearchBar.css';
import SearchIcon from './icons/search.svg';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.timeouts = []
        this.state = {isSearching: false}
    }

    clearTimeouts() {
        this.timeouts.forEach(clearTimeout);
    };

    addTimeout(timeout) {
        this.timeouts.push(timeout);
    };

    handleAnimation() {
        this.setState({isSearching: !this.state.isSearching})
    };

    onChangeHandler(event) {
        if(!this.state.isSearching){
            this.handleAnimation()
        }
        this.clearTimeouts();
        var searchInput = event.target.value;
        var request = setTimeout(()=> {
            this.props.fetchAirports(searchInput, this.handleAnimation.bind(this))
        }, 1000)
        this.addTimeout(request)
    };

    render() {
        return (
            <div className="SearchBar">
                <img className={`Search ${this.state.isSearching ? "Animate": ""}`} src={SearchIcon} alt="Search Icon" />
                <input type="text" onChange={(event) => this.onChangeHandler(event)} placeholder="Type to search for an airport"/>
            </div>
        );
    };
}

export default SearchBar;