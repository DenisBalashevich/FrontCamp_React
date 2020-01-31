import React from 'react';
import { connect } from 'react-redux';

import { getMovie, findMoviesForCurrentMovie } from '../../../redux/actions/movies';

import MasterPage from '../MasterPage/MasterPage';
import MovieList from '../../MovieList/MovieList';
import MovieDetails from '../../MovieDetails/MovieDetails';

class MovieDetailsPage extends React.Component {
  loadData() {
    this.props.getMovie(this.props.match.params.id).then(() => {
      this.props.findMoviesForCurrentMovie();
    });
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadData();
    }
  }

  render() {
    return (
      <MasterPage
        headerContent={<MovieDetails />}
        pageContent={<MovieList />}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovie: (data) => dispatch(getMovie(data)),
    findMoviesForCurrentMovie: (data) => dispatch(findMoviesForCurrentMovie(data)),
  };
}

export default connect(null, mapDispatchToProps)(MovieDetailsPage);
