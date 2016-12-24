import React, { Component } from 'react';
import axios from 'axios';
import * as Config from './actions/Config';
import Loading from './loading/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.onDataLoaded = this.onDataLoaded.bind(this);
    this.onLoadingComplete = this.onLoadingComplete.bind(this);

    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    axios.get('./assets/data.js',{responseType: 'json'})
    .then(this.onDataLoaded);
  }

  onDataLoaded({data}) {

    Config.Save(data);
    this.refs.loading.startLoading(Config.getManifest());

  }

  onLoadingComplete() {
    this.setState({loaded:true});
  }

  render() {
    return(
      <div id="wrapper">

        <Loading ref="loading" onLoadingComplete={this.onLoadingComplete}/>

        {this.state.loaded ?
        <div id="main">
          <Header />
          {this.props.children}
          <Footer />
        </div>
        : null }

      </div>
    );
  }
}

export default App;
