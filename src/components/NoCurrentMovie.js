var React = require('react')

var NoCurrentMovie = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Please select a movie from the list!</h3>
      </div>
    )
  }
})

module.exports = NoCurrentMovie