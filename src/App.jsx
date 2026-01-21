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
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pageValue, setPageValue] = useState(1);
  return (
    <div>
      <header className="bg-gray-400 h-20 content-center text-center">
        <Search onChange={setSearchValue} className="bg-gray-700" />
      </header>
      <div className="ml-13 mb-10 mt-2 grid grid-cols-4 grid-rows-4 gap-3">
        <GetApi searchValue={searchValue} pageValue={pageValue} />
      </div>
      <Footer setPageValue={setPageValue} pageValue={pageValue} />
    </div>
  );
}
export default App;
