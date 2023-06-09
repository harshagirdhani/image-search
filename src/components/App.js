import React from 'react';
    import axios from 'axios';
    import SearchBar from './SearchBar';
    import ImageList from './ImageList'

    class App extends React.Component  {
        state = { images: [] };


        onSearchSubmit = async (term) => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term},
                headers: {
                    Authorization: 'Client-ID oQysylgE8Vaf2M3ccjlki6Pe-excZbli64kDEldmaMI'
                }
            })

            this.setState({ images: response.data.results })
        }

        render() {
            return (
                <div>
                    <SearchBar userSubmit={this.onSearchSubmit}/>
                    <span>Found: {this.state.images.length} images</span>
                    <ImageList foundImages={this.state.images} />
                </div>
            )
        }

    }

    export default App;