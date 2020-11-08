import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Youtube from './APIS/youtube';
import VideoList from './components/videoList';
import VideoDetails from './components/videoDetails';
class App extends React.Component {
  state = { videos: [], selectedVideo : null};
  onSearch = async searchString => {
    const result = await Youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCRqJiKlIfulwUW_yhPS6x4_d1H11gMcYs',
        q: searchString,
      },
    });
    this.setState({ videos: result.data.items });
  };
  onVideoSelect = (video)=>{
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearch} />
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
