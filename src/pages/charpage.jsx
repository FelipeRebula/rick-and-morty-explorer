import GetApi from "../components/getapi";

function Charpage() {
  return (
    <div>
      <GetApi />
      <header className="bg-gray-400 h-20 content-center text-center">
        <div className="flex justify-self-start">
          <a href="../">Back to Menu</a>
        </div>
      </header>
    </div>
  );
}
export default Charpage;
