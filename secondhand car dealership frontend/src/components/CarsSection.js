import React from "react";
import car from "../images/carFront.svg";
import { Link } from "react-router-dom";
import rightArrow from "../images/rightArrow.png";

export default function CarsSection() {
  return (
    <div className="flex-col sm:mt-8 bg-carImg bg-cover bg-center bg-no-repeat px-8 md:px-24 h-screen flex items-center text-gray-800 md:flex-row">
      <div className=" w-full md:w-1/2">
        <img src={car} alt="" />
      </div>
      <div className="w-full sm:mt-8  md:w-1/2 flex flex-col items-start md:ml-8">
        <h1 className="text-2xl  md:font-bold   md:text-4xl  justify-center font-Bebas mb-8 ">
          PURCHASE YOUR{" "}
          <span className="text-blue-600 text-3xl md:text-5xl">DREAM</span>{" "}
          <span className="text-4xl md:text-5xl">CAR</span> FROM US
        </h1>
        <p className="md:text-2xl text-gray-600 font-semibold">
          We sell a wide variety of cars that suit your lifestyle needs, our
          cars are well maintained and preserved for our beloved customers,
          click the link below and make a worthwile life decision.
        </p>
        <div className="border-blue-200 border-2 flex  justify-center  p-2 rounded mt-4">
          <Link
            to="/cars"
            className="bg-red-700 px-4 py-2 md:py-4 md:px-8 md:text-2xl text-white font-semibold md:font-bold rounded flex items-center"
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
    </div>
  );
}
