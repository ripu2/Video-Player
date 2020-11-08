import React from 'react';
import '../styles/app.css';
class VideoItem extends React.Component {
  render(props) {
    return (
      <>
        <div className="video-item item ">
          <img
            className="ui image"
            src={this.props.video.snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">{this.props.video.snippet.title}</div>
          </div>

          {/* <div class="ui card">
            <div class="image">
              <img src={this.props.video.snippet.thumbnails.medium.url} />
            </div>
            <div class="content">
              <a class="header"> {this.props.video.snippet.title}</a>
              <div class="meta">
                <span class="date">{this.props.video.snippet.publishTime}</span>
              </div>
              <div class="description">
                {this.props.video.snippet.description}
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                {this.props.video.snippet.channelTitle}
              </a>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default VideoItem;
