import Movie from "../components/Movie";
import { useContext } from "react";
import { DataContext } from "../App";

function Series() {
  const { movieData } = useContext(DataContext);
  const series = movieData.filter((movie) => movie.Type === "series");
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10">
      {series.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Series;
