// React
var React = require("react");
var Router = require('react-router');

var App = require("./components/app.react.js");
var Hello = require("./components/hello.react.js");
var Goodbye = require("./components/goodbye.react.js");
var Edit = require("./components/edit.react.js");
var NotFound = require("./components/notfound.react.js");


// Set up Router object
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// Declare routes
var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="app" handler={Hello} />
    <Route name="hello" handler={Hello} />
    <Route name="goodbye" handler={Goodbye} />
    <Route name="edit" path="/edit/:name" handler={Edit} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  //var params = state.params;
  //React.render(<Handler params={params} />, document.getElementById('app'));
  React.render(<Handler />, document.getElementById('app'));
});
