const rootReducer = function (state, action) {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return { ...state, searchText: action.payload };
        case 'SET_SEARCH_STATUS':
            return { ...state, searchStatus: action.payload };
        case 'SET_SEARCH_BY':
            return { ...state, searchBy: action.payload };
        case 'SET_SORT_BY':
            return { ...state, sortBy: action.payload };
        case 'STORE_MOVIE':
            return { ...state, selectedMovie: action.payload };
        case 'STORE_MOVIES':
            return { ...state, movies: action.payload };
        default:
            return state;
    }
};

export default rootReducer;