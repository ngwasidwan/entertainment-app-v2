import Movie from "../components/Movie";
import { useContext } from "react";
import { DataContext } from "../App";

function Movies() {
  const { movieData } = useContext(DataContext);

  const moviesArr = movieData.filter((movie) => movie.Type === "movie");

  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10">
      {moviesArr.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
