import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Youtube from './APIS/youtube';
import VideoList from './components/videoList';
import VideoDetails from './components/videoDetails';
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onSearch('React.js')
  }

  onSearch = async searchString => {
    const result = await Youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCRqJiKlIfulwUW_yhPS6x4_d1H11gMcYs',
        q: searchString,
      },
    });
    this.setState({
      videos: result.data.items,
      selectedVideo : result.data.items[0]
      });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {  
    return (
      <>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearch} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetails video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
