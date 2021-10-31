import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchPage } from "../../helpers/dataFetchers";
import { loadMovies, moviesLoaded } from "../../redux/actions";

const useLoadMovies = () => {
  const dispatch = useDispatch();
  const loadMoviesPaged = useCallback(
    async (pageNumber) => {
      dispatch(loadMovies());
      try {
        console.log(" pagenumber to be loaded : ", pageNumber);
        const response = await fetchPage(pageNumber);
        dispatch(moviesLoaded(response));
      } catch (e) {
        // console.log(e);
      }
    },
    [dispatch]
  );
  return loadMoviesPaged;
};

export default useLoadMovies;
