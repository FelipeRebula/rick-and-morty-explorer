import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import GetApi from "../components/getapi";
import Eps from "../components/eps";
import CharInfos from "../components/charinfos";
import ImageChar from "../components/imgaechar";
import Header from "../components/header";
function Charpage() {
  const [loading, setLoading] = useState(true);
  const [nameChar, setNameChar] = useState([]);
  const [searchParams] = useSearchParams();
  const button = "Back to Main Menu";
  return (
    <div>
      <GetApi
        id={searchParams.get("id")}
        setNameChar={setNameChar}
        nameChar={nameChar}
        setLoading={setLoading}
        loading={loading}
      />

      <Header button={button} />

      <div>
        <div>
          <ImageChar nameChar={nameChar} />
        </div>
        <div className="flex flex-col ">
          <CharInfos nameChar={nameChar} loading={loading} />
          <Eps nameChar={nameChar} className="flex flex-col" />
        </div>
      </div>
    </div>
  );
}

export default Charpage;
