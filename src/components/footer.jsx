import { useEffect, useState } from "react";
function Footer({ pageValue, setPageValue, info }) {
  const [inputPage, setInputPage] = useState(pageValue);
  const pages = info?.pages ?? 1;
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputPage) {
        setPageValue(inputPage);
      }
      if (inputPage === 0 || pages === undefined) {
        setInputPage(1);
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [inputPage]);

  return (
    <footer className=" flex items-center justify-center bg-blue-950 text-white h-20">
      <button
        className="mr-4 text-3xl rounded-3xl bg-blue-800 w-25 md:w-40"
        onClick={() => (
          setPageValue((prev) => Math.max(prev - 1, 1)),
          setInputPage((prev) => prev - 1)
        )}
      >
        Back
      </button>
      <input
        type="text"
        className=" rounded-md text-4xl w-11 bg-blue-800 items-center justify-center text-white"
        value={inputPage}
        onChange={(e) => setInputPage(Number(e.target.value))}
      />
      <h1 className="text-4xl">/</h1>
      <h1 className=" text-4xl text-white">{Number(pages)}</h1>
      <button
        className="ml-4 text-3xl rounded-3xl bg-blue-800 text-white w-25 md:w-40"
        onClick={() => (
          setPageValue((prev) => prev + 1),
          setInputPage((prev) => prev + 1)
        )}
      >
        Next
      </button>
    </footer>
  );
}
export default Footer;
