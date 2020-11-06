import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
class App extends React.Component {
  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
