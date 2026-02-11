import ObjetcttoArray from "../../utils/ObjecttoArray";
import GetApi from "./getapi";

function Residents(details, setNameChar, setLoading) {
  const list = ObjetcttoArray(details, "details");
  const ids = list.map((e) => e.slice(-1));
  return ids.map((e) => (
    <GetApi id={e} setLoading={false} setNameChar={setNameChar} />
  ));
}
export default Residents;
