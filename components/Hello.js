import React from 'react'

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, {this.props.params.name || "Andrew!"}!</h1>
      </div>
    )
  }


});
