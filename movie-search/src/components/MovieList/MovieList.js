import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem/MovieListItem';

import styles from './MovieList.module.scss';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    let content;
    if (!movies) {
      content = null;
    } else if (movies.length === 0) {
      content = <div className={styles.noMoviesText}>No films found</div>;
    } else {
      content = movies.map(movie => <MovieListItem movie={movie} key={movie.id} />);
    }

    return (
      <div className={styles.movieList}>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies.data }
}

export default connect(mapStateToProps)(MovieList);
