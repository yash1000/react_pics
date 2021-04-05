import React from 'react'
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component{
    state = {
        images : []
    }
    onSearchSubmit = async (term) => {
        const image = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID TO632Cc3hXwk6t8aVWzuGWh9U5nltGHzkE5zMdlF8KE'
            },
        })
        this.setState({images:image.data.results})
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found :{this.state.images.length} images
            </div>
        )
    }
}

export default App;