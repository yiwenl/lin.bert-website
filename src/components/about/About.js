import React, { Component } from 'react';
import ConfigJSON from '../config/Config';

class About extends Component {

  constructor(props) {
    super(props);

    this.about = ConfigJSON.about;
  }

  render(){

    let mediaBG = {
      backgroundImage: 'url(' + this.about.poster + ')'
    }

    return(
      <section id="about">
        <div className="media-holder" style={mediaBG} />
        <div className="content-holder container">
          <div className="row">
            <div className="col-md-6 column c1">
              <h1 ><strong dangerouslySetInnerHTML={{__html:this.about.title}}></strong></h1>
              <h3 dangerouslySetInnerHTML={{__html:this.about.description}}></h3>
            </div>
            <div className="col-md-6 column c2 text-center">
              <a className="link big"><span>linbert.collective@gmail.com</span></a>
              <div className="col-xs-12 no-margin social-holder text-center">
            
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 column">
              <img className="img-responsive" src="assets/about/wen.jpg" />
              <div className="row no-margin">
                <div className="col-xs-12 column c1">
                  <h1 className="small"><strong dangerouslySetInnerHTML={{__html:this.about.wen.title}}></strong></h1>
                  <h3 dangerouslySetInnerHTML={{__html:this.about.wen.description}}></h3>
                </div>
              </div>
              <div className="row no-margin">
                <div className="col-xs-6 no-margin">
                  <a className="link" href="http://blog.bongiovi.tw/" target="_blank"><span>Link to the blog</span></a>
                </div>
                <div className="col-xs-6 no-margin social-holder text-right">
                  <a className="social icon-github-circled" href="https://github.com/yiwenl" target="_blank"></a>
                  <a className="social icon-instagram" href="https://www.instagram.com/yiwen/" target="_blank"></a>
                  <a className="social icon-twitter" href="https://twitter.com/yiwen_lin" target="_blank"></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 column">
              <img className="img-responsive" src="assets/about/bert.jpg" />
              <div className="row no-margin">
                <div className="col-xs-12 column c2 full">
                  <h1 className="small"><strong dangerouslySetInnerHTML={{__html:this.about.bert.title}}></strong></h1>
                  <h3 dangerouslySetInnerHTML={{__html:this.about.bert.description}}></h3>
                </div>
              </div>
              <div className="row no-margin">
                <div className="col-xs-6 no-margin">
                  <a className="link" href="http://www.bertrandcarrara.com/" target="_blank"><span>Link to the site</span></a>
                </div>
                <div className="col-xs-6 no-margin social-holder text-right">
                  <a className="social icon-instagram" href="https://www.instagram.com/bertrandcarrara/" target="_blank"></a>
                  <a className="social icon-twitter" href="https://twitter.com/bertrandcarrara" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 column c1">
              <h1 className="small"><strong dangerouslySetInnerHTML={{__html:this.about.friends.title}}></strong></h1>
              <h3 dangerouslySetInnerHTML={{__html:this.about.friends.description}}></h3>
              <div className="friend-list">
                {this.about.friends.list.map(friend => {
                  return(
                    <a className="link" href={friend.link} target="_blank"><span>{friend.name}</span></a>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 column c2">
            </div>
          </div>

        </div>

      </section>
    );
  }
}

export default About;
