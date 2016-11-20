import React, { Component } from 'react';
import { Link } from 'react-router';
import ConfigJSON from '../config/Config';


class Nav extends Component {
  render(){
    return(
      <nav className="table-cell">
        <ul>
          {ConfigJSON.nav.map((navItem) => {
            return(
              <li key={navItem.route}>
                  <Link to={navItem.route}>{navItem.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
