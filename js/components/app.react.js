// React
import React from 'react';

// Child Components
var Nav = require("./nav.react.js");
var Footer = require("./footer.react.js");

export default React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )

  }
})
