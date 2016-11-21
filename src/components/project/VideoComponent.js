import React, { Component } from 'react';


class Video extends Component {
  constructor(props){
    super(props);
  }

  render(){

    let backgroundImageStyle = {
      backgroundImage: 'url(' + this.props.poster + ')'
    };

    return (
      <video style={backgroundImageStyle} preload="auto">

      </video>
    );
  }
}

export default Video;
