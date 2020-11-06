import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Youtube from './APIS/youtube';
class App extends React.Component {
  state = { vidoes: [] };
  onSearch = async searchString => {
    const result = await Youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCRqJiKlIfulwUW_yhPS6x4_d1H11gMcYs',
        q: searchString,
      },
    });
    this.setState({ vidoes: result.data.items });
  };
  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearch} />i have{' '}
          {this.state.vidoes.length} videos
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
