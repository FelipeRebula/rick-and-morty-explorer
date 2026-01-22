import { useState } from "react";
function Search({ className, onChange, setPageValue }) {
  const [search, setSearch] = useState([]);
  const seasons = {
    Season_1: 11,
    Season_2: 10,
    Season_3: 10,
    Season_4: 10,
    Season_5: 10,
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setPageValue(1);
    if (onChange) onChange(value);
  };
  const searchBar = (
    <input
      className={` w-150 h-10 text-white shadow-2xl text-2xl rounded-md ${className}`}
      type="text"
      placeholder="  Search characters"
      value={search}
      onChange={handleChange}
    />
  );
  const locatesel = <select name="Location/Dimesion"></select>;
  const epsel =
    ((
      <select name="Season" id="a">
        <option value={seasons.Season_1.valueOf}>Season 1</option>
        <option value="">Season 2</option>
        <option value="">Season 3</option>
        <option value="">Season 4</option>
        <option value="">Season 5</option>
      </select>
    ),
    (<select name="Episode" id=""></select>));
  return (
    <div>
      {searchBar}
      {locatesel}
      {epsel}
    </div>
  );
}
export default Search;
