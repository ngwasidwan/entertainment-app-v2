import Movie from "./Movie";
import { useContext } from "react";
import { DataContext } from "../App";

const SLICE_VAL = -13;
function Recommended() {
  const { movieData, inputVal } = useContext(DataContext);
  const recommendedData = movieData.slice(SLICE_VAL);

  return (
    <div>
      {!inputVal && <p className="mb-4 text-xl">Recommended for you</p>}
      <div className="grid grid-cols-4 gap-x-4 gap-y-10">
        {recommendedData.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
