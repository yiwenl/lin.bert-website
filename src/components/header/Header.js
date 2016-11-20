import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {

  render(){
    return (
      <header className="container">
        <div className="row">
          <div className="column col-xs-6 text-left">
            <p className="title table-cell"><b>lin.bert</b></p>
          </div>
          <div className="column col-xs-6 text-right">
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
