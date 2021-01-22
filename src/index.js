import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import Youtube from "./APIS/youtube";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";
const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    onSearch("React.js");
  }, []);
  const onSearch = async (searchString) => {
    const result = await Youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyB7u2-LkKi-3KIV2_KMWF7YS-Bk3wMHJ5w",
        q: searchString,
      },
    });
    setVideo(result.data.items);
    setSelectedVideo(result.data.items[0]);
  };
  const onVideoSelect = (video) => {
    selectedVideo(video);
  };
  return (
    <>
      <div className="ui container">
        <SearchBar onFormSubmit={onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={onVideoSelect} videos={video} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
