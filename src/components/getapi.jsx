import { useEffect } from "react";

function GetApi({
  searchValue = "",
  pageValue = "",
  setNameChar = "",
  nameChar = [],
  setLoading = false,
  loading = false,
  id = "",
  getparam = "character",
}) {
  function geturl(name = "rick", page, param = "character") {
    setLoading(true);
    const scrollY = window.scrollY;

    fetch(
      `https://rickandmortyapi.com/api/${param}/${id}?page=${page}&name=${name}`,
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

    geturl(searchValue, pageValue, getparam);
  }, [searchValue, pageValue, getparam]);
  return <>{loading ? loading : (nameChar, loading)}</>;
}
export default GetApi;
