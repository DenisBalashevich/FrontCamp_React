import React from 'react';
import { connect } from 'react-redux';

import { setSortBy } from '../../redux/actions/movies';

import Toggle from '../Controls/Toggle/Toggle';

import indexStyles from '../../styles/index.module.scss';
import styles from './ResultPanel.module.scss';

class ResultPanel extends React.Component {
  onSortByChange = (e) => {
    this.props.setSortBy(e.target.checked ? 'vote_average' : 'release_date');
  }

  render() {
    return (
      <div className={`${styles.resultPanel} ${indexStyles.twoSideItems}`}>
        <div>{this.props.status}</div>
        <Toggle title="sort by" left="release date" right="rating" onChange={this.onSortByChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { status: state.searchStatus }
}

const mapDispatchToProps = dispatch => {
  return {
    setSortBy: (data) => dispatch(setSortBy(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPanel);
