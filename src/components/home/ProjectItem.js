import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectItem extends Component {

  constructor(props) {
    super(props);

    this.project = props.project;
  }

  render(){

    let backgroundImageStyle = {
      backgroundImage: 'url(' + this.project['main-image'] + ')'
    };

    let href = 'detail/' + this.project.route;

    return(
      <div className="project-item">

        <Link to={href}>

          <div className="image-overflow">
            <div className="image-holder" style={backgroundImageStyle} />
            <div className="border" />
          </div>

          <p className="title">
            <span>{this.project.name}</span>
          </p>

          <p className="caption">
            {this.project.type}
          </p>

        </Link>

      </div>
    )
  }

}

export default ProjectItem;
