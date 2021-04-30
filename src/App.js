import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import youtube from './Youtube.js';
import SearchBar from './Searchbar.js'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail.js'

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
              <div className='container'>
                  <div className="row">
                      <div className="col-9">
                          <VideoDetail video={this.state.selectedVideo}/>
                      </div>
                      <div className="col-3">
                          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}

export default App;
