import React, {Component} from 'react';

import debounce from 'lodash.debounce';
import YTSearch from 'youtube-api-search';

import Search from './../search/Search.jsx';
import VideoList from './../videos/VideoList.jsx';
import VideoDetail from './../videos/VideoDetail.jsx';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react.js');
  }

  videoSearch(term) {
    YTSearch({
      key: process.env.YT_API_KEY,
      term: term
    }, videos => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }

  render() {
    const videoSearch = debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <main className="content">
        <section className="search">
          <div className="search-bar">
            <Search onSearchTermChange={videoSearch}/>
          </div>
          <div className="search-results">
            <div>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
