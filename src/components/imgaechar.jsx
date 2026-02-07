import ObjetcttoArray from "../../utils/ObjecttoArray";

function ImageChar(nameChar) {
  return (
    <div>
      <img src={ObjetcttoArray(nameChar.nameChar, "image")} alt="" />
    </div>
  );
}
export default ImageChar;
