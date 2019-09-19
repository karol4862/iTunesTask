import React, { Component } from 'react';
import './styles/SearchSection.css';

class SearchSection extends Component {
    state = {
        searchValue:'',
        error:null
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        const API = `https://itunes.apple.com/search?entity=song&sort=recent&limit=200&term=${this.state.searchValue}`;
        fetch(API)
            .then(resp => resp.json())
            .then(data => {
                const musicList = data.results.map((item, id) => {
                    const musicObject = {
                        artist:item.artistName,
                        track: item.trackName,
                        thumbnail:item.artworkUrl100,
                        id:id
                    }
                    return musicObject
                })
                this.props.addMusicToState(musicList)
            })
            .then(data => this.setState({
                searchValue:''
            }))
            .catch(error => this.setState({error}))

        e.preventDefault()
    }
    render() {
        return (
            <div className="searchSection">
                <h2>iTunes api example</h2>
                <form className="searchForm" onSubmit={this.handleSubmit} >
                    <input 
                        type="text" 
                        value={this.state.searchValue}
                        name="searchValue"
                        placeholder="Search songs..."
                        onChange={this.handleChange}
                        />
                    <button>search</button>
                </form>
                <p>Search by song title, author, song number, lyrics, catalog or copyright owner</p>
                {this.state.error && alert(this.state.error.message)}
            </div>
        );
    }
}

export default SearchSection;
