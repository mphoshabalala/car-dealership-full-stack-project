import React, { useEffect } from "react";
import { useDealers } from "../contexts/dealersContext";
import dealer from "../images/man1.png";
import { Link } from "react-router-dom";
import rightArrow from "../images/rightArrow.png";
export default function DealersSection() {
  return (
    <div className="bg-dealerImage h-screen w-full bg-center bg-cover bg-no-repeat p-8 mb-20  md:p-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h1 className="text-2xl  md:font-bold   md:text-4xl  justify-center font-Bebas mb-8 ">
            MEET OUR DEALERS AND PURCHASE YOUR{" "}
            <span className="text-blue-600 text-3xl md:text-5xl">DREAM</span>{" "}
            <span className="text-3xl md:text-5xl">CAR</span>
          </h1>
          <p className="md:text-2xl text-gray-600 font-semibold">
            Meet our reliable and trustworthy dealers who specializes in
            providing a world class service in the process of your car purchase.
          </p>
          <div className="border-blue-200 border-2 flex flex-col md:flex-row  justify-center  p-2 rounded mt-4">
            <Link
              to="/dealers"
              className="bg-purple-800 px-4 py-2 md:py-4 md:px-8 md:text-2xl text-white font-semibold md:font-bold    rounded flex items-center"
            >
              MEET MORE{"  "}
              <span>
                <img
                  className="h-4 md:h-6 ml-2  md:ml-4"
                  src={rightArrow}
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="border-2 w-30 h-35  md:w-60 md:h-70 border-blue-200 rounded bg-white p-2">
            <img className="" src={dealer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
