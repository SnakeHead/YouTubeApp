import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.video);
    this.state = {
      imageURL: this.props.video.snippet.thumbnails.default.url,
      title: this.props.video.snippet.title,
      description: this.props.video.snippet.description
    }
  }

  render() {
    return (
      <div className="video-detail col-md-6">
        {this.state.imageURL}
        <li className="list-group-item">
          <div className="video-list media">

            <div className="media-left">
              <img className="media-object" src={this.state.imageURL} alt={this.state.title}/>
            </div>

            <div className="media-left">
              <div className="media-heading media-left">{this.state.title}</div>
              <div className="media-body">{this.state.description}</div>
            </div>
            
          </div>
        </li>
      </div>
    );
  };
}
