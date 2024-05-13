import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Bookmark from "./Pages/Bookmark";
import Home from "./Pages/Home";
import Error from "./components/Error";
import { data } from "../data";
import { createContext, useState } from "react";

export const DataContext = createContext();

function App() {
  const [movieData, setMovieData] = useState(data);
  const [inputVal, setInputVal] = useState("");

  const router = createBrowserRouter([
    {
      element: (
        <DataContext.Provider
          value={{
            movieData,
            inputVal,
            setMovieData,
            setInputVal,
          }}
        >
          <SideBar />
        </DataContext.Provider>
      ),
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "movies", element: <Movies /> },
        { path: "series", element: <Series /> },
        { path: "bookmarks", element: <Bookmark /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
