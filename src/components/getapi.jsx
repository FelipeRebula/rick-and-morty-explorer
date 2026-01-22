import { useEffect, useState } from "react";

import Loading from "./loading";

function GetApi({
  searchValue,
  pageValue,
  setNameChar,
  nameChar,
  setLoading,
  loading,
}) {
  function geturl(name = "", page = 1) {
    const scrollY = window.scrollY;
    setLoading(true);
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`,
    )
      .then((res) => res.json())
      .then((data) => setNameChar(data || []))

      .catch(() => setNameChar([]))
      .finally(() => {
        setLoading(false);
        window.scrollTo({ top: scrollY, behavior: "auto" });
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
        <Loading className={`w-full items-center`} />
      ) : (
        (nameChar, loading)
      )}
    </>
  );
}
export default GetApi;
