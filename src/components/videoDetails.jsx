import React from 'react';

class videoDetails extends React.Component {
  render(props) {
    if (!this.props.video) {
      return (
        <>
          <h2>
            <i class="spinner loading icon huge"></i> Loading ...
          </h2>
        </>
      );
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
          <div className="ui  grid">
            <div className="two column row">
              <div className="left floated column">
                <div class="ui labeled button" tabindex="0">
                  <div class="ui red button">
                    <i class="heart icon"></i> Like
                  </div>
                  <a class="ui basic red left pointing label">1,048</a>
                </div>
                <div class="ui labeled button" tabindex="0">
                  <div class="ui basic blue button">
                    <i class="comment icon"></i> Comments
                  </div>
                  <a class="ui basic left pointing blue label">1,048</a>
                </div>
              </div>

              <div className="right floated column">
                <button class="ui youtube button">
                  <i class="bell icon"></i>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default videoDetails;
