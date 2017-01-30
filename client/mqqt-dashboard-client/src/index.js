import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute  } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import  './index.css';

import Layout from "./components/layout/Layout";


import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import DnDTest from "./pages/DnDTest"


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={Home} />
          <Route path="/dndtest" component={DnDTest} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
