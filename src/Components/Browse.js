import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          Main container
            - Video backgroupd
            - title
          Secondary container
            - movies list * n
            - cards * n
      */}
    </div>
  );
};

export default Browse;
