import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import youtube from './Youtube.js';
import SearchBar from './Searchbar.js'

class App extends Component {

  state={
    videos:[],
    selectedVideo: null
  }

  handleSubmit = async (termFromSearchBar)=>{
    const response = await youtube.get('/search', {
      params:{
        q: termFromSearchBar
      }
    })

    this.setState({
      videos:response.data.items
    })
  };

  handleVideoSelect = (video)=> {
    this.setState({selectedVideo: video})
  }

    render() {
      return (
        <div className='container'>
            <SearchBar handleFormSubmit={this.handleSubmit}/>
        </div>
    )
  }
}

export default App;
