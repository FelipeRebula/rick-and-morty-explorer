import Search from "./search";
function Header({ setPageValue, setSearchValue, button = "" }) {
  if (button === "") {
    return (
      <header className="bg-blue-950 h-20 content-center text-center">
        <Search
          onChange={setSearchValue}
          setPageValue={setPageValue}
          className="bg-blue-800 border border-blue-900 shadow-2xl text-white outline-0 indent-1.5"
        />
      </header>
    );
  } else {
    return (
      <header className="bg-blue-950 h-20 content-center text-left flex ">
        <a
          href="/"
          className="bg-blue-800 text-white h-10 ml-3 mt-5 gap-4 w-3x rounded-md items-center flex text-left"
        >
          {button}
        </a>
      </header>
    );
  }
}
export default Header;
