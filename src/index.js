// React
var React = require('react')
var ReactDOM = require('react-dom')

// Movie data
var movieData = require('./movies.json')

var MovieList = require('./components/MovieList')
var Header = require('./components/Header')
var NavBar = require('./components/NavBar')
var MovieDetails = require('./components/MovieDetails')
var NoCurrentMovie = require('./components/NoCurrentMovie')
var MovieReviews = require('./components/MovieReviews')
var Jukebox = require('./components/Jukebox')

var App = React.createClass({
  movieClicked: function(movie) {
    this.setState({
      currentMovie: movie
    })
  },
  viewChanged: function(view) {
     this.setState({
      currentView: view
    })
  },
  renderMovieDetails: function() {
    if (this.state.currentMovie == null) {
      return <NoCurrentMovie />
    } else {
      return <MovieDetails movie={this.state.currentMovie}
                           movieWatched={this.movieWatched} />
    }
  },
  renderMainSection: function() {
    if (this.state.currentView === "reviews") {
      return <MovieReviews />
    } else if (this.state.currentView === "jukebox") {
      return <Jukebox />
    } else {
      return (
        <div>
          <MovieList movies={this.state.movies} movieClicked={this.movieClicked} />
          {this.renderMovieDetails()}
        </div>
      )
    }
  },
  getInitialState: function() {
    return {
      movies: movieData,
      currentView: "movies",
      currentMovie: null
    }
  },
  render: function() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <NavBar movieCount={this.state.movies.length} currentView={this.state.currentView} viewChanged={this.viewChanged} />
        <div className="main row">
          {this.renderMainSection()}
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
