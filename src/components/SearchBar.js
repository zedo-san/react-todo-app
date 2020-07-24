import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toSearch: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        
    }
    handleSearch(e) {
        this.setState({toSearch: e.target.value}, () => this.sendData())
        
    }
    sendData = () => {
        this.props.mySearch(this.state.toSearch);
    }
    render() {
        return (
            <div className="SearchBar">
                <input type="text" placeholder="Search" onChange={this.handleSearch}/> 
                
            </div>
        );
    }
}

export default SearchBar;