import React from 'react';
import '../styles/app.css';
class VideoItem extends React.Component {
  render(props) {
    return (
      <>
        <div onClick={(video)=>{
          this.props.onVideoSelect(this.props.video)
        }} className="video-item item ">
          <img
            className="ui image"
            src={this.props.video.snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoItem;
