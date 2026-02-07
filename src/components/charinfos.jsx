import ObjetcttoArray from "../../utils/ObjecttoArray";
function CharInfos(nameChar) {
  const Character = nameChar.nameChar;

  const Location = ObjetcttoArray(
    ObjetcttoArray(Character, "location"),
    "name",
  );

  return (
    <div className="bg-sky-300 w-3xs">
      <b>Gender:</b>
      {ObjetcttoArray(Character, "gender")}
      <br />
      <b>Specie:</b>
      {console.log(ObjetcttoArray(Character))}
      {ObjetcttoArray(Character, "species")}
      <br />
      <b>origin:</b>
      <a href={ObjetcttoArray(Character, "location")}>{Location}</a>
    </div>
  );
}

export default CharInfos;
