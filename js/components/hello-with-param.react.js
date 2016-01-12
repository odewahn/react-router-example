var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Howdy, {this.props.params.name}!</h1>
      </div>
    )
  }


});
