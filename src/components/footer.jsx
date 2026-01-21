import { useEffect, useState } from "react";
function Footer({ pageValue, setPageValue }) {
  const [inputPage, setInputPage] = useState(pageValue);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputPage) {
        setPageValue(Number(inputPage));
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [inputPage]);

  return (
    <footer className="flex items-center justify-center bg-gray-600 h-20">
      <button
        className="mr-4 text-3xl rounded-3xl bg-gray-300 w-40"
        onClick={() => setPageValue((prev) => Math.max(prev - 1, 1))}
      >
        Back
      </button>
      <input
        type="text"
        className=" text-4xl w-15 bg-gray-700 "
        value={inputPage}
        min="1"
        onChange={(e) => setInputPage(Number(e.target.value))}
      />

      <h1 className=" text-4xl ">/42</h1>
      <button
        className="ml-4 text-3xl rounded-3xl bg-gray-300 w-40"
        onClick={() => setPageValue((prev) => prev + 1)}
      >
        Next
      </button>
    </footer>
  );
}
export default Footer;
