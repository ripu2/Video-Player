import React from 'react';

class videoDetails extends React.Component {
  render(props) {
    if (!this.props.video) {
      return <>Loading...</>;
    }
    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <>
        <div className="ui segment">
          <div className="ui embed">
            <iframe title="video player" src={videoSrc} />
          </div>
          <h4 className="ui header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </>
    );
  }
}

export default videoDetails;
