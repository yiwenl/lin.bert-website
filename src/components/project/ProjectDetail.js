import React, { Component } from 'react';
import Video from './VideoComponent';
import ConfigJSON from '../config/Config';

const MEDIA_VIDEO = 'video';
const MEDIA_IMAGE = 'image';
const ROW_1COLUMN = '1-columns';
const ROW_2COLUMNS = '2-columns';


class ProjectDetail extends Component {

  constructor(props){
    super(props);

    this.route = this.props.params.name;
    this.project = this.getContent(this.route);
    this.content = this.project.content;
    console.log(this.content);
  }

  getContent(route){

    for(let i=0; i<ConfigJSON.projects.length; i++) {
      if(ConfigJSON.projects[i].route == route)
        return ConfigJSON.projects[i];
    }
  }

  render(){



    return(
      <section id="detail">
        <div className="media-holder">
          {this.content.main.type == 'video' ? <Video poster={this.content.main.poster} /> : '' }
        </div>
        <div className="content-holder">
          {this.content.rows.map((row) => {
            console.log(row);
          })}
        </div>
      </section>
    );
  }
}

export default ProjectDetail;
