import { useEffect, useState } from "react";
import CharProfile from "./charprofile";
import Loading from "./loading";

function GetApi({ searchValue, pageValue }) {
  const [nameChar, setNameChar] = useState([]);
  const [loading, setLoading] = useState(false);

  function geturl(name = "", page = 1) {
    const scrollY = window.scrollY;
    setLoading(true);
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`,
    )
      .then((res) => res.json())
      .then((data) => setNameChar(data.results || []))
      .catch(() => setNameChar([]))
      .finally(() => {
        setLoading(false);
        window.scrollTo({ top: scrollY, behavior: "instant" });
      });
  }

  useEffect(() => {
    if (!searchValue) {
      return geturl("", pageValue);
    }

    geturl(searchValue, pageValue);
  }, [searchValue, pageValue]);
  return (
    <>
      {loading ? (
        <Loading className={`w-full${"className"}`} />
      ) : (
        <CharProfile characters={nameChar} />
      )}
    </>
  );
}
export default GetApi;
