import { Link } from "react-router-dom";
import cancel from "../images/cancel.png";

export default function Menu({ setIsMenubarOpen }) {
  return (
    <div className="w-full md:hidden flex justify-center flex-col text-gray-700 font-semibold  h-full  fixed top-0 left-0 bg-gray-100 bg-opacity-80 ">
      <button
        className=" block ml-auto m-4 mr-8"
        onClick={() => setIsMenubarOpen((prev) => !prev)}
      >
        <img src={cancel} alt="" />
      </button>
      <ul className="flex h-full items-center flex-col justify-center ">
        <li className="mb-8">
          <Link to="/cars">Buy Car</Link>
        </li>
        <li className="mb-8">
          <Link to="/sell-your-car">Sell Car</Link>
        </li>
        <li className="mb-8">
          <Link to="/dealers">Dealers </Link>
        </li>
      </ul>
    </div>
  );
}
