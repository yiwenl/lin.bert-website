import React, { Component } from 'react';
import * as Config from '../actions/Config';

class About extends Component {
  render(){

    let about = Config.getAbout();

    return (
      <div id="about">
        <img id="header" src={Config.getImageFromCache("about").src} />
        <div id="content">
          <h1><span>{about.title}</span></h1>

          <div className="row">
            <div className="column left">
              <p dangerouslySetInnerHTML={{__html:about.description}} />
            </div>
            <div className="column right">

              <div className="contact">
                <a className="link link--kukuri" href="mailto:linbert.collective@gmail.com" data-letters="linbert.collective@gmail.com">linbert.collective@gmail.com</a>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="column left">
              <img className="portrait" src={Config.getImageFromCache("wen").src} />
              <h1 className="small"><span>{about.wen.title}</span></h1>
              <p dangerouslySetInnerHTML={{__html:about.wen.description}} />

              <div className="site link" >

                <span className="icon-link" />
                <a href="http://blog.bongiovi.tw/" target="_blank" data-letters="Link to the blog" className="link link--kukuri">Link to the blog</a>

                <div className="social-holder">
                  <a className="social icon-github-circled" target="_blank" href="https://github.com/yiwenl"/>
                  <a className="social icon-instagram" target="_blank" href="https://www.instagram.com/yiwen/"/>
                  <a className="social icon-twitter" target="_blank" href="https://twitter.com/yiwen_lin"/>
                </div>

              </div>

            </div>
            <div className="column right">
              <img className="portrait" src={Config.getImageFromCache("bert").src} />
              <h1 className="small"><span>{about.bert.title}</span></h1>
              <p dangerouslySetInnerHTML={{__html:about.bert.description}} />

              <div className="site link" >

                <span className="icon-link" />
                <a href="http://www.bertrandcarrara.com" target="_blank" data-letters="Link to the blog" className="link link--kukuri">Link to the blog</a>

                <div className="social-holder">
                  <a className="social icon-instagram" target="_blank" href="https://www.instagram.com/bertrandcarrara/"/>
                  <a className="social icon-twitter" target="_blank" href="https://twitter.com/bertrandcarrara"/>
                </div>

              </div>

            </div>
          </div>

          <div className="row">
            <div className="column left">

              <h1 className="small"><span>Friends<br/>& Collaborators</span></h1>

              {about.friends.map((friend,i) => {
                return(
                  <div key={i} className="link">
                    <span className="icon-link" />
                    <a href={friend.url} target="_blank" data-letters={friend.name} className="link link--kukuri">{friend.name}</a>
                  </div>
                );
              })}


            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default About;
