import { useEffect, useState } from "react";
function GetApi() {
  const [nameChar, setNameChar] = useState("");

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?count=10?name=${nameChar}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((nameChar) => {
        console.log(nameChar);
        setNameChar(nameChar.message);
      });
  }, []);
  return nameChar;
}
export default GetApi;
