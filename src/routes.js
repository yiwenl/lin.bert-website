import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import About from './components/about/About';
import Press from './components/press/Press';

export default (
  <Route component={App}>

    <Route path="about" component={About} />
    <Route path="press" component={Press} />
    <Route path="*" component={HomePage} />

  </Route>
);
