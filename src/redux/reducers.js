import {
  LOAD_MOVIES,
  MOVIES_LOADED,
  REMOVE_SEARCH,
  SEARCH_MOVIES,
} from "./actions";

const inititalState = {
  isLoading: false,
  movies: [],
  filteredMovies: [],
  currentPage: 0,
  totalItems: 0,
  nextPageAvailable: true,
  searchMode: false,
};

const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        isLoading: true,
      };

    case MOVIES_LOADED:
      const pageNumber = +action.payload.page["page-num-requested"];
      const totalItems = +action.payload.page["total-content-items"];
      const items = action.payload.page["content-items"].content;
      const allMovies = [...state.movies, ...items];

      return {
        ...state,
        movies: allMovies,
        filteredMovies: allMovies,
        isLoading: false,
        currentPage: pageNumber,
        totalItems: totalItems,
        nextPageAvailable: totalItems - allMovies.length > 0,
      };

    case SEARCH_MOVIES:
      const filteredMovies = state.movies.filter((movie) =>
        movie.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchMode: true,
        filteredMovies,
      };
    case REMOVE_SEARCH:
      return {
        ...state,
        searchMode: false,
        filteredMovies: state.movies,
      };
    default:
      return inititalState;
  }
};

export default rootReducer;
