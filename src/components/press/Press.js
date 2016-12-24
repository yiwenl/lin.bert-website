import React, { Component } from 'react';
import * as Config from '../actions/Config';

class Press extends Component {
  render(){

    let press = Config.getPress();
    console.log(press);

    return(
      <div id="press">
      {
        press.map((press,i) => {
          return(
            <div className="press-item" key={i}>
              <p className="label" dangerouslySetInnerHTML={{__html:press.label}}/>
              <p className="sub" dangerouslySetInnerHTML={{__html:press.sub}}/>
            </div>
          );
        })
      }
      </div>
    )
  }
}

export default Press;
