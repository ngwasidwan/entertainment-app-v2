import { useState } from "react";
import { IoMdFilm } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";
import { IoBookmark } from "react-icons/io5";

function Movie({ movie, type }) {
  const { Poster, Title, Year, Type } = movie;
  const [bookmark, setBookmark] = useState(false);

  function handleBookmark() {
    setBookmark((cur) => !cur);
    movie.Bookmarked ? (movie.Bookmarked = false) : (movie.Bookmarked = true);
    console.log(bookmark);
  }
  return (
    <div className="relative text-xs text-stone-300">
      <div className="bg-stone-700 rounded-full absolute right-4 top-4 p-1 ">
        <IoBookmark
          className={`${
            movie.Bookmarked ? "text-stone-50 fill-white" : "text-stone-400"
          }`}
          onClick={handleBookmark}
        />
      </div>
      <img
        src={Poster}
        alt={`${Title} Poster`}
        className={`${
          type === "trending"
            ? "h-[14rem] object-cover w-[400px]"
            : "w-full h-[200px] object-cover"
        } `}
      />

      <div className={type === "trending" ? "absolute bottom-2" : ""}>
        <span className="mr-2">{Year}</span>
        <span className="mr-2">
          {" "}
          {Type === "series" ? (
            <PiTelevisionBold className="text-xs inline-block" />
          ) : (
            <IoMdFilm className="text-xs inline-block" />
          )}
          {Type}
        </span>
        <span>18+</span>
        <p
          className={`${
            type === "trending"
              ? "font-bold text-xl"
              : "text-base font-semibold"
          }`}
        >
          {Title}
        </p>
      </div>
    </div>
  );
}

export default Movie;
