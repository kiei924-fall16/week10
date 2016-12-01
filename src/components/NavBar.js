var React = require('react')
var NavBarItem = require('./NavBarItem')

var NavBar = React.createClass({
  viewChanged: function(view) {
    this.props.viewChanged(view)
  },
  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <NavBarItem view="movies" title="Movies" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="reviews" title="Reviews" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="jukebox" title="Jukebox" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <li className="nav-text pull-right">{this.props.movieCount} movies</li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = NavBar