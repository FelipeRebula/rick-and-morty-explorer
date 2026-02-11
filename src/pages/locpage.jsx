import { useState } from "react";
import GetApi from "../components/getapi";
import Header from "/src/components/header";
import { useSearchParams } from "react-router-dom";
import ObjetcttoArray from "../../utils/ObjecttoArray";
import Residents from "../components/residents";
function Locpage() {
  const [nameChar, setNameChar] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  if (!nameChar) {
    return null;
  } else {
    const details = ObjetcttoArray(ObjetcttoArray(nameChar, "results"), "0");
    return (
      <div>
        <GetApi
          getparam={"location"}
          searchValue={searchParams.get("name")}
          setNameChar={setNameChar}
          setLoading={setLoading}
          nameChar={nameChar}
        />
        <Header button={"Back to Main Menu"} />
        <div>
          {console.log(typeof ObjetcttoArray(details, "residents"))}
          {details && (
            <Residents
              details={ObjetcttoArray(details, "residents")}
              setNameChar={setNameChar}
              setLoading={setLoading}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Locpage;
