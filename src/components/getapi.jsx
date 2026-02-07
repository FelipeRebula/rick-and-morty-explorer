import { useEffect } from "react";

function GetApi({
  searchValue = "",
  pageValue = 1,
  setNameChar = "",
  nameChar = [],
  setLoading = false,
  loading = false,
  id = "",
}) {
  function geturl(name = "rick", page) {
    setLoading(true);
    const scrollY = window.scrollY;

    fetch(
      `https://rickandmortyapi.com/api/character/${id}?page=${page}&name=${name}`,
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
  return <>{loading ? loading : (nameChar, loading)}</>;
}
export default GetApi;
