import Movie from "./Movie";
import { useContext } from "react";
import { DataContext } from "../App";

const SLICE_NUM = 3;

function Trending() {
  const { movieData, inputVal } = useContext(DataContext);
  const trendData = movieData.slice(0, SLICE_NUM);

  return (
    <div className="mt-6 mb-16">
      {!inputVal && <p className="text-xl mb-4">Trending</p>}
      <div className="flex gap-10">
        {trendData.map((movie) => (
          <Movie key={movie.id} movie={movie} type="trending" />
        ))}
      </div>{" "}
    </div>
  );
}

export default Trending;
