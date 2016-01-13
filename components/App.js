// This file is kind of like the layout.erb / template file -- put stuff here that is common to every page.
import React from 'react';

import Nav from './Nav'
import Footer from './Footer'

export default React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <hr/>
        {this.props.children}
        <Footer />
      </div>
    )

  }
})
