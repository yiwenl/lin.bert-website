import React, { Component } from 'react';
import Video from './VideoComponent';
import ConfigJSON from '../config/Config';

const MEDIA_VIDEO = 'video';
const MEDIA_IMAGE = 'image';
const COLUMN_TYPE_PARAGRAPH = 'paragraph';
const COLUMN_TYPE_IMAGE = 'image';

const slideWidth = 250;
const horizontalMargin = 40;
const itemWidth = slideWidth + horizontalMargin * 2;


class ProjectDetail extends Component {

  constructor(props){
    super(props);

    this.route = this.props.params.name;
    this.project = this.getContent(this.route);

    this.content = this.project.content;

    this.slide = this.slide.bind(this);
    this.max = this.content.gallery.length - 1;

    this.state = {
      next: false,
      prev: true,
      current: 0
    }
  }

  getContent(route){

    let _project = null;

    ConfigJSON.projects.map((project) => {
      if(project.route == route) {
        _project =  project;
      }
    });

    return _project;

  }

  componentDidMount() {


  }

  slide(pos) {

    let current = this.state.current + pos;

    this.setState({next:false, prev: false});
    if(current == this.max) { this.setState({next:true}); }
    if(current == 0) { this.setState({prev:true}); }
    this.setState({current: current});

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
    let keyGallery = 0;

    let mediaBG = {
      backgroundImage: 'url(' + this.content.main.poster + ')'
    };

    return(
      <section id="detail">
        <div className="media-holder" style={mediaBG} />
        <div className="content-holder container">
          <div className="row">
            {this.content.info.map(info => {
              console.log(info);
                return(
                    <div key={index++} className={'col-md-6 column c' + index}>
                      <h1 ><strong dangerouslySetInnerHTML={{__html:info.title}}></strong></h1>
                      <h3 dangerouslySetInnerHTML={{__html:info.description}}></h3>
                      {info.links.map(link => {
                        return(
                          <a className="link" href={link.url} target="_blank" title={link.label}>{link.label}</a>
                        );
                      })}
                    </div>
                );
            })}

          </div>
          <div className={'gallery-holder container-fluid slide' + this.state.current}>

            {this.content.gallery.map((galleryItem) => {

              let style = {
                backgroundImage: 'url(' + galleryItem + ')'
              };

              return(

                <div className="gallery-item" ref={'gallery-item' +  keyGallery} key={keyGallery++} >
                  <div className="table">
                    <div className="table-cell" style={style}>

                    </div>
                  </div>
                </div>
              );
            })}

            <div className="arrow next" ref="next" onClick={this.slide.bind(this,1)} disabled={this.state.next} />
            <div className="arrow prev" ref="prev" onClick={this.slide.bind(this,-1)} disabled={this.state.prev} />

          </div>
        </div>
      </section>
    );
  }
}

export default ProjectDetail;
