import React from 'react';
import { connect } from 'react-redux';

import { findMovies } from '../../../redux/actions/movies';

import MasterPage from '../MasterPage/MasterPage';
import MovieList from '../../MovieList/MovieList';
import SearchPanel from '../../SearchPanel/SearchPanel';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchText: undefined
    };
  }

  componentDidMount() {
    this.props.findMovies(this.props.match.params.text);
    this.setState({ currentSearchText: this.props.match.params.text });
  }

  render() {
    return (
      <MasterPage
        headerContent={<SearchPanel />}
        pageContent={<MovieList />}
        hideSearchIcon={true}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findMovies: (data) => dispatch(findMovies(data)),
  };
}

export default connect(null, mapDispatchToProps)(SearchPage);
