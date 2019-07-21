import * as React from 'react';
import Stack from 'components/stack';
import Loader from 'components/loader';
import { getMovies, acceptMovie, rejectMovie } from 'src/helper/fakeAxios';
import './styles.scss';

class AppCointainer extends React.Component {
  state = {
    movies: [],
    isFetching: false,
  }

  componentDidMount () {
    this.fetchData();
  }

  onAdd = (id) => {
    const allMovies = this.state.movies;
    const moviesWithoutDeleted = allMovies.filter((movie) => movie.id !== id);
    this.setState({
      movies: moviesWithoutDeleted,
    }, () => {
      acceptMovie(id);
    });
  }

  onDelete = (id) => {
    const allMovies = this.state.movies;
    const moviesWithoutDeleted = allMovies.filter((movie) => movie.id !== id);
    this.setState({
      movies: moviesWithoutDeleted,
    }, () => {
      rejectMovie(id);
    });
  }

  onRefresh = () => {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      isFetching: true,
    }, () => {
      getMovies()
        .then((movies) => {
          this.setState({
            movies,
            isFetching: false,
          });
        })
        .catch(() => {
          this.setState({
            movies: [],
            isFetching: false,
          });
        });
    });
  };

  getStack = () => {
    if (this.state.isFetching) {
      return null;
    }

    return (
      <Stack
        movies={this.state.movies}
        onAdd={this.onAdd}
        onDelete={this.onDelete}
        onRefresh={this.onRefresh}
      />
    );
  }

  render () {
    return (
      <div className="app-container">
        <Loader isFetching={this.state.isFetching} />
        {this.getStack()}
      </div>
    );
  }
}

export default AppCointainer;
