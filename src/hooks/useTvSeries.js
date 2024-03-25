import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TV_SERIES_API_OPTIONS } from "../utils/constants";
import { addTvSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvSeries = () => {
  //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const tvSeries = useSelector((store) => store.movies.tvSeries);

  const getTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    !tvSeries && getTvSeries();
  }, []);
};

export default useTvSeries;
