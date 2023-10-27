import React from "react";
import polo from "../images/polonobg.png";
import { Link } from "react-router-dom";
import rightArrow from "../images/rightArrow.png";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse h-screen w-full md:flex-row items-center justify-center bg-heroImage bg-center bg-cover bg-no-repeat bg-blue-100 px-4 py-40 md:px-16 md:py-20">
      <div className=" w-full md:w-1/3 h-full items-center  flex flex-col  justify-center md:items-start">
        <h1 className="font-Bebas text-center text-3xl md:text-start md:text-7xl">
          BUY FROM BEST DEALERS, WHERE QUALITY MEETS AFFORDABILITY
        </h1>
        <p className="font-semibold md:text-2xl text-gray-500">
          Easy Purchase. Affordable. Good Conditions.
        </p>
        <div className="border-blue-200 border-2 flex items-center justify-center  p-2 rounded mt-4">
          <Link
            to="/cars"
            className="text-semibold bg-blue-800 py-2 md:py-4 px-4 md:px-8 md:text-2xl text-white md:font-bold  rounded flex items-center"
          >
            SEE MORE{"  "}
            <span>
              <img
                className="h-4 ml-4  md:h-6  md:ml-8"
                src={rightArrow}
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
      <img className="w-full md:w-2/3" src={polo} alt="" />
    </div>
  );
}
