import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../images/rightArrow.png";
import paidcar from "../images/paidCar.svg";

export default function SellYourCarSection() {
  return (
    <div className=" h-screen w-full bg-gray-100   p-8 md:p-24">
      <div className="flex items-center flex-col-reverse md:flex-row-reverse">
        <div className="w-full md:w-1/2 flex flex-col md:items-start ">
          <h1 className="font-semibold  md:font-bold text-2xl sm:text-center  md:text-4xl  md:justify-center font-Bebas mb-8">
            SELL YOUR CAR TO US AND{" "}
            <span className="text-green-800 text-3xl md:text-5xl">
              GET PAID IMMEDIATELY!!
            </span>
          </h1>
          <p className="md:text-2xl text-gray-600 font-semibold">
            At BEST DEALERS we value your precious assets and that is why we
            offer deals that you can not regret, we follow legal and fair
            transactional process when purchasing your car.
          </p>
          <div className="border-blue-200 border-2 flex  md:justify-center mt-10  p-2 rounded md:mt-4">
            <Link
              to="/sell-your-car"
              className="bg-green-500 py-4 px-8 md:text-2xl text-white font-semibold md:font-bold    rounded flex items-center"
            >
              SELL YOUR CAR{"  "}
              <span>
                <img
                  className="h-4  md:h-6 ml-2  md:ml-4"
                  src={rightArrow}
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border-2 w-80 h-60 border-blue-200 rounded bg-white p-2">
            <img className="w-full" src={paidcar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
