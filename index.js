// React
import React from 'react';
import ReactDOM from 'react-dom'

import { Router, Route } from 'react-router'

import App from './components/App'
import Hello from './components/Hello'
import Goodbye from './components/Goodbye'
import NotFound from './components/NotFound'

let f = (x) => x*x //this is just here to show es6 syntax is working
console.log(f(5))


const routes = (
  <Route component={App}>
    <Route path="hello" component={Hello}>
      <Route path=":name" component={Hello} />
    </Route>
    <Route name="goodbye" path="/goodbye" component={Goodbye} />
    <Route name="default" path="/" component={Hello} />
    <Route path="*" component={NotFound}/>
  </Route>
)

ReactDOM.render(<Router>{routes}</Router> , document.getElementById('app'));
