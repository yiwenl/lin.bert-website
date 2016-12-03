import React, { Component } from 'react';
import ConfigJSON from '../config/Config';

class Press extends Component {

  constructor(props) {
    super(props);

    this.press = ConfigJSON.press;
  }

  render(){
    return(
      <section id="press">
        <div className="content-holder container">
          <div class="row">
            <h1><strong>Press</strong></h1>
          {
            this.press.map(press => {
              return(
                <a
                  key={press.name}
                  href={press.url}
                  className="link"
                  target="_blank"
                  disabled={press.url.length == 0}>

                  <span dangerouslySetInnerHTML={{__html:press.name}}></span>

                </a>
              )
            })
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Press;
