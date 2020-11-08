import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Youtube from './APIS/youtube';
import VideoList from './components/videoList';
class App extends React.Component {
  state = { videos: [] };
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
  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearch} />
          <VideoList videos={this.state.videos} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
