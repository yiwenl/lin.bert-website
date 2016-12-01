import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';


require('./scss/app.scss');


render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory} routes={routes} />,
  document.getElementById('app')
);
