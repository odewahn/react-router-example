// React
import React from 'react';
import ReactDOM from 'react-dom'

import { Router, Route } from 'react-router'

import App from './components/app.react.js'
import Hello from './components/hello.react.js'
import Goodbye from './components/goodbye.react.js'
import NotFound from './components/notfound.react.js'

let f = (x) => x*x //this is just here to show es6 syntax is working
console.log(f(5))


const routes = (
  <Route path="/" component={App}>
    <Route path="hello" component={Hello}>
      <Route path=":name" component={Hello} />      
    </Route>
    <Route name="goodbye" path="/goodbye" component={Goodbye} />
    <Route name="default" path="/" component={Hello} />
    <Route path="*" component={NotFound}/>
  </Route>
)

ReactDOM.render(<Router>{routes}</Router> , document.getElementById('app'));
