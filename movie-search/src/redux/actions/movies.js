import  movieService  from '../../services/movie-service';

export const setSearchText = (text) => ({
  type: 'SET_SEARCH_TEXT',
  payload: text
});

export const setSearchBy = (value) => ({
  type: 'SET_SEARCH_BY',
  payload: value
});

export const setSortBy = (value) => ({
  type: 'SET_SORT_BY',
  payload: value
});

export const setSearchStatus = (text) => ({
  type: 'SET_SEARCH_STATUS',
  text: text
});

export const storeMovie = (movie) => ({
  type: 'STORE_MOVIE',
  payload: movie
});

export const storeMovies = (movies) => ({
  type: 'STORE_MOVIES',
  payload: movies
});

export const getMovie = (id) => {
  return async function(dispatch) {
    try {
          const movie = await movieService.getMovie(id);
          return dispatch(storeMovie(movie));
      }
      catch (error) {
          return console.log(error);
      }
  };
}

export const findMoviesForCurrentMovie = () => {
  return async function(dispatch, getState) {
    const state = getState();
    const searchParams = {
      search: state.selectedMovie.genres[0],
      searchBy: 'genres',
      sortBy: state.sortBy,
      sortOrder: 'desc'
    };

    try {
          const movies = await movieService.getMovies(searchParams);
          dispatch(storeMovies(movies));
          dispatch(setSearchStatus(`Films by ${state.selectedMovie.genres[0]} genre`));
      }
      catch (error) {
          return console.log(error);
      }
  };
}

export const findMovies = (text) => {
  return async function(dispatch, getState) {
    text = text ? text : '';
    const state = getState();
    const searchParams = {
      search: text,
      searchBy: state.searchBy,
      sortBy: state.sortBy,
      sortOrder: 'desc'
    };
    try {
          const movies = await movieService.getMovies(searchParams);
          dispatch(storeMovies(movies));
          dispatch(setSearchText(text));
          const status = (movies.total > 0) ? `${movies.total} movies found` : '';
          dispatch(setSearchStatus(status));
      }
      catch (error) {
          return console.log(error);
      }
  };
}