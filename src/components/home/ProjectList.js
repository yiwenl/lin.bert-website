import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import ConfigJSON from '../config/Config';


class ProjectList extends Component {
  render(){
    return (
      <div>
        {ConfigJSON.projects.map((project) => {
          return (
            <ProjectItem project={project} key={project.route} />
          )
        })}
      </div>
    );
  }
}

export default ProjectList;
