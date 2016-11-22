import React, { Component } from 'react';
import Video from './VideoComponent';
import ConfigJSON from '../config/Config';

const MEDIA_VIDEO = 'video';
const MEDIA_IMAGE = 'image';
const COLUMN_TYPE_PARAGRAPH = 'paragraph';
const COLUMN_TYPE_IMAGE = 'image';


class ProjectDetail extends Component {

  constructor(props){
    super(props);

    this.route = this.props.params.name;
    this.project = this.getContent(this.route);
    this.content = this.project.content;

  }

  getContent(route){

    for(let i=0; i<ConfigJSON.projects.length; i++) {
      if(ConfigJSON.projects[i].route == route)
        return ConfigJSON.projects[i];
    }
  }

  getColumnContent(rowContent) {

    switch (rowContent['column-type']) {
      case COLUMN_TYPE_PARAGRAPH:
          return(
            <div className="text-holder">
              <h1><strong>{rowContent.title}</strong></h1>
              <h3>{rowContent.description}</h3>
            </div>
          );
        break;
      case COLUMN_TYPE_IMAGE:
          return(
            <img className="media" src={rowContent.image} />
          );
        break;
      default:
        return <div />;
    }

  }

  render(){

    let index = 0;

    return(
      <section id="detail">
        <div className="media-holder">
          {this.content.main.type == 'video' ? <Video poster={this.content.main.poster} /> : '' }
        </div>
        <div className="content-holder container">
          {this.content.rows.map((rowOBJ) => {

            let row = rowOBJ.row;
            console.log(row);
            if(row.length == 2) {

              let contentL = this.getColumnContent(row[0].column);
              let contentR = this.getColumnContent(row[1].column);

              return(
                <div className="row" key={rowOBJ.row.type + '_' + index++}>
                  <div className="column col-md-6">
                    {contentL}
                  </div>
                  <div className="column col-md-6">
                    {contentR}
                  </div>
                </div>
              );

            } else {

              let content = this.getColumnContent(row[0].column);

              return(
                <div className="row" key={rowOBJ.row.type + '_' + index++}>
                  <div className="column single col-xs-12">
                    {content}
                  </div>
                </div>
              );
            };

          })}
        </div>
      </section>
    );
  }
}

export default ProjectDetail;
