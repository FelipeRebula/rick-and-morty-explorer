function ObjetcttoArray(Objects, keys = "") {
  if (!Objects) {
    return null;
  } else {
    const objkeys = Object.keys(Objects);

    for (let key of objkeys) {
      if (key == keys) {
        if (key != "") {
          return Objects[key];
        } else {
          return Objects;
        }
      }
    }
  }
}
export default ObjetcttoArray;
