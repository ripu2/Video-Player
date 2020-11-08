import React from 'react';
import VideoItem from './videoItem';
class VideoList extends React.Component {
  render(props) {
    const renderdList = this.props.videos.map(video => {
      return (
        <div className="ui relaxed divided list">
          <VideoItem onVideoSelect={this.props.onVideoSelect} video={video} />
        </div>
      );
    });
    return <>{renderdList}</>;
  }
}

export default VideoList;
