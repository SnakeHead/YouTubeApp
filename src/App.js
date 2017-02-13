import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'

import SearchBar from './components/searchBar'
import helpers from './utils/helpers'
import Video from './components/video'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      video: {},
      order: 'date'
    };

    this.youtubeSearch = this.youtubeSearch.bind(this);

  }

  youtubeSearch(searchTerm) {
      helpers.getVideoByKeyword({searchTerm}, this.state.order).then(function(response) {
        this.setState({videos: response});
      }.bind(this));
    }

  render() {

    const youtubeSearch = _.debounce((searchTerm) => {this.youtubeSearch(searchTerm) }, 300);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>YouTube React Demo</h2>
        </div>
        <SearchBar onSearchTermChanged={this.youtubeSearch}/>

        <div>
          {this.state.videos.map((video) => <Video video={video} key={video.etag}  /> )}
        </div>
      </div>
    );
  }
}

export default App;
