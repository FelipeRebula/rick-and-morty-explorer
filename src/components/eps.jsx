import ObjetcttoArray from "../../utils/ObjecttoArray";

function Eps(nameChar) {
  const eps = ObjetcttoArray(nameChar.nameChar, "episode");

  const epsInfo = [];
  function getepinfo(id) {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((res) =>
      res.json(),
    );
  }
  function Loader() {
    if (!eps) {
      return null;
    } else {
      eps.map((eps) => <li>{}</li>);
    }
  }
  return Loader();
}
export default Eps;
