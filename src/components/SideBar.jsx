import { NavLink, Outlet } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { IoMdFilm } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { IoIosBookmark } from "react-icons/io";
import { useContext } from "react";
import { DataContext } from "../App";
import { data } from "../../data";
function SideBar() {
  const { setMovieData, inputVal, setInputVal } = useContext(DataContext);

  function handleInput(e) {
    const searchMovie = data.filter((movie) =>
      movie.Title.toLowerCase().includes(inputVal)
    );
    setInputVal(e.target.value);
    setMovieData(searchMovie);
  }

  return (
    <div className="flex gap-5 pl-5 bg-slate-900 text-slate-50 min-h-svh">
      <div className="px-4 py-2 bg-slate-600 mt-4 rounded-xl">
        <MdMovie className="text-3xl text-red-500 mb-8 mt-5" />
        <nav className="text-slate-400">
          <NavLink to="/">
            <IoGridOutline className="icon" />
          </NavLink>

          <NavLink to="movies">
            <IoMdFilm className="icon" />
          </NavLink>

          <NavLink to="series">
            <PiTelevisionBold className="icon" />
          </NavLink>

          <NavLink to="bookmarks">
            <IoIosBookmark className="icon" />
          </NavLink>
        </nav>
      </div>

      <div>
        <div className="flex items-center gap-4 mt-12 mb-4">
          <IoSearch className="text-2xl" />
          <input
            value={inputVal}
            type="text"
            placeholder="Search for movies and tv series"
            className="placeholder:text-stone-500 text-xl w-[400px] bg-slate-900 focus:outline-none "
            onChange={handleInput}
          />
        </div>
        <Outlet />{" "}
      </div>
    </div>
  );
}

export default SideBar;
