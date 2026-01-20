import { useState, useEffect } from "react";
{
  /*npm run dev
  cd rick-and-morty-explorer
  
  */
}
import "./App.css";
import Search from "./components/search";
import GetApi from "./components/getapi";
function App() {
  return (
    <div className="ml-187">
      <h1>
        <Search />
        <GetApi />
      </h1>
    </div>
  );
}
export default App;
