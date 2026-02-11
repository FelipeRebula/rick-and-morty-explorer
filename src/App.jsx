import { useState } from "react";
{
  /*npm run dev
  cd rick-and-morty-explorer
  
  */
}
import "./App.css";

import GetApi from "./components/getapi";
import Footer from "./components/footer";
import CharProfile from "./components/charprofile";
import Header from "./components/header";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pageValue, setPageValue] = useState(1);
  const [nameChar, setNameChar] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Header setSearchValue={setSearchValue} setPageValue={setPageValue} />
      <div className="min-h-screen ml-7 mb-10 mt-2 grid grid-cols-1 grid-rows-1 gap-3 md:grid-cols-4 md:grid-rows-4 md:ml-13">
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
