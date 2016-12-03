import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Header extends Component {
  render(){
    return (
      <header className="container">
        <img id="logo" src="assets/logo.png" />
        <div className="row">
          <div className="column col-xs-12 col-md-4 col-sm-6 text-left">
            <p className="title table-cell">
              <Link to="/"><b>lin.bert</b></Link>
            </p>
          </div>
          <div className="column col-xs-12 col-md-8 col-sm-6 text-right">
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
