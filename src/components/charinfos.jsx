import ObjetcttoArray from "../../utils/ObjecttoArray";
import { Link } from "react-router-dom";
function CharInfos(nameChar) {
  const Character = nameChar.nameChar;
  const Location = ObjetcttoArray(
    ObjetcttoArray(Character, "location"),
    "name",
  );

  return (
    <div className="bg-blue-950 w-3xs text-white">
      <b>Gender:</b>
      {ObjetcttoArray(Character, "gender")}
      <br />
      <b>Specie:</b>
      {ObjetcttoArray(Character, "species")}
      <br />
      <b>Origin:</b>

      <Link state={Location} to={`/locate/?name=${Location}`}>
        {Location}
      </Link>
    </div>
  );
}

export default CharInfos;
