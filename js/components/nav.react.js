// React
import React from 'react'
import {Link} from 'react-router'

// Component
module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <span className="navLink"><Link to="hello">Hello</Link> </span>
        <span className="navLink"><Link to="goodbye">Goodbye</Link></span>
      </div>
    );
  }
});
