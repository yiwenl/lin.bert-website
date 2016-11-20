import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
