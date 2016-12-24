import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return(
      <header>
        <div id="logo">
          <Link to="/"><img src="assets/logo.png" /></Link>
        </div>
        <img id="icon" src="assets/icon.png" />
        <nav>
          <ul>
            <li><Link className="link link--kukuri" to="/" data-letters="Works">Works</Link></li>
            <li><Link className="link link--kukuri" to="about" data-letters="About & Contacts">About & Contacts</Link></li>
            <li><Link className="link link--kukuri" to="press" data-letters="Press">Press</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
