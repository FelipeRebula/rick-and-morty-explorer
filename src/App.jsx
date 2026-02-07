import { useState } from "react";
{
  /*npm run dev
  cd rick-and-morty-explorer
  
  */
}
import "./App.css";
import Search from "./components/search";
import GetApi from "./components/getapi";
import Footer from "./components/footer";
import CharProfile from "./components/charprofile";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pageValue, setPageValue] = useState(1);
  const [nameChar, setNameChar] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <header className="bg-gray-400 h-20 content-center text-center">
        <Search
          onChange={setSearchValue}
          setPageValue={setPageValue}
          className="bg-gray-700"
        />
      </header>
      <div className="min-h-screen ml-13 mb-10 mt-2 grid grid-cols-4 grid-rows-4 gap-3">
        <GetApi
          searchValue={searchValue}
          pageValue={pageValue}
          setNameChar={setNameChar}
          setLoading={setLoading}
        />

        {!loading && <CharProfile characters={nameChar} />}
      </div>
      <Footer
        info={nameChar.info}
        setPageValue={setPageValue}
        pageValue={pageValue}
      />
    </div>
  );
}
export default App;
