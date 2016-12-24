import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Config from '../actions/Config';


class DetailContent extends Component {
  render() {

    let content = this.props.content;
    let prev = this.props.prev;
    let next = this.props.next;
    let index = -1;

    return(
      <div className="detail-holder">
        <div className="detail-content">
          <div className="row">
            <h1>{content.title}</h1>
            <div className="column left">
              <p dangerouslySetInnerHTML={{__html:content.contentL}} />
            </div>
            <div className="column right">
              <p dangerouslySetInnerHTML={{__html:content.contentR}} />
            </div>
          </div>
          <div className="link-holder">
          {content.link.map(link => {
            return(
              <div className="link" key={link.label}>
                <span className="icon-link"></span>
                <a target="_blank" href={link.href} className="link link--kukuri" data-letters={link.label}>{link.label}</a>
              </div>
            );
          })}
          </div>
          <div className="images-holder">
          {content.images.map((image,i) => {


            let imageSplit = image.split(",");
            let imageID = imageSplit.length > 1 ? imageSplit[0] : image;
            let isFull = imageSplit.length > 1;
            index += imageSplit.length > 1 ? 0 : 1;

            let columnClass = isFull ? "full" : !((index + 2) % 2) ? "left" : "right";

            return(
              <div className={'column ' + columnClass} key={i}>
                <img src={Config.getImageFromCache(imageID).src} />
              </div>
            );

          })}
          </div>
          <div className="pagination">
            <div className="column left">
              <Link className="link" to={'project/' + prev.route}><span className="icon-left-open">Previous Project</span></Link></div>
            <div className="column right">
              <Link className="link" to={'project/' + next.route}><span className="icon-right-open-after">Next Project</span></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailContent;
