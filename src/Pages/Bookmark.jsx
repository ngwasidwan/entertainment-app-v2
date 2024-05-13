import Movie from "../components/Movie";
import { useContext } from "react";
import { DataContext } from "../App";

function Bookmark() {
  return (
    <div>
      <MoviesBookmark />
    </div>
  );
}

function MoviesBookmark() {
  const { movieData } = useContext(DataContext);

  const moviesBookmark = movieData.filter((movie) => movie.Bookmarked === true);
  console.log(moviesBookmark);
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10">
      {moviesBookmark.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Bookmark;
