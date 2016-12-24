"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

require('./scss/app.scss');

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);
