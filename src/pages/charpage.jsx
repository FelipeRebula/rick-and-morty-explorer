import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import GetApi from "../components/getapi";
import Eps from "../components/eps";
import CharInfos from "../components/charinfos";
import ImageChar from "../components/imgaechar";

function Charpage() {
  const [loading, setLoading] = useState(true);
  const [nameChar, setNameChar] = useState([]);
  const [searchParams] = useSearchParams();

  return (
    <div>
      <GetApi
        id={searchParams.get("id")}
        setNameChar={setNameChar}
        nameChar={nameChar}
        setLoading={setLoading}
        loading={loading}
      />

      <header className="bg-gray-400 h-20 content-center text-center">
        <div className="flex justify-self-start">
          <a href="../">Back to Menu</a>
        </div>
      </header>
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
