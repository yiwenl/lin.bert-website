import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Config from '../actions/Config';

class DetailHeader extends Component {

  render() {

    let project = this.props.project;
    let active = this.props.active;
    let closedClass = this.props.closedClass;

    return(
      <div className="project-item">
        <Link to={'project/' + project.route} activeClassName="active">
          <div className={'header-holder' + closedClass} disabled={active}>
            <div className="bg">
              <img src={Config.getImageFromCache(project.image).src} />
            </div>
            <div className="border" />
            <h1><span>{project.name}</span></h1>
            <h2><span>{project.type}</span></h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default DetailHeader;
