import React, { Component } from 'react';
import ProjectList from './ProjectList';

class HomePage extends Component {
  
  render(){
    return(
      <section id="home" className="container-fluid">
        <ProjectList />
      </section>
    );
  }
}

export default HomePage;
