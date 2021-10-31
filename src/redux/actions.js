export const LOAD_MOVIES = "LOAD_MOVIES";
export const MOVIES_LOADED = "MOVIES_LOADED";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const REMOVE_SEARCH = "REMOVE_SEARCH";

export const loadMovies = () => {
  return {
    type: LOAD_MOVIES,
  };
};

export const moviesLoaded = (response) => {
  return {
    type: MOVIES_LOADED,
    payload: response,
  };
};

export const searchMovie = (searchKey) => {
  return {
    type: SEARCH_MOVIES,
    payload: searchKey,
  };
}
export const removeSearch = () => {
  return {
    type: REMOVE_SEARCH,
  };
}