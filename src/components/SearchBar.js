import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: props.searchInput,
            toSearch: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            toSearch: e.target.value
        }, () => {
            this.state.searchInput(this.state.toSearch)
        })
    }
    render() {
        return (
            <div>
                <input type="text" 
                        className="border rounded-md border-gray-400 px-3 py-1 focus:border-purple-500" 
                        placeholder="Search" onChange={(e) => this.handleChange(e)}/> 
            </div>
        );
    }
}

export default SearchBar;