function CharProfile(props) {
  const chars = props.characters || [];

  return chars.map((char) => (
    <a
      href="#"
      key={char.id}
      id={char.id}
      className="bg-blue-950 items-center h-110 w-80 rounded-md"
    >
      <div>
        <div className="flex justify-center-safe items-center mt-3">
          <img src={`${char.image}`} alt="" />
        </div>
        <div className="mt-5 ml-3 text-white">
          <h1>{char.name}</h1>
          <div>
            <h2>Status:{char.status} </h2>
            <h2>Locate/Dimension: {char.origin.name}</h2>
          </div>
        </div>
      </div>
    </a>
  ));
}

export default CharProfile;
