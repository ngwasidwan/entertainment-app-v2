import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import { useContext } from "react";
import { DataContext } from "../App";
function Home() {
  const { inputVal } = useContext(DataContext);
  return (
    <div>
      {!inputVal && <Trending />}
      <Recommended />
    </div>
  );
}

export default Home;
