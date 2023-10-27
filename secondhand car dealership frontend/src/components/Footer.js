import React from "react";
import iphone from "../images/iphone.png";
import email from "../images/email.png";
import underline from "../images/underline.svg";

export default function Footer() {
  return (
    <>
      <img src={underline} className="w-full m-0" alt="" />
      <div
        className="w-full mt-0 px-8 md:px-16 py-32 bg-purple-300 font-semibold flex flex-col 
      md:flex-row items-center md:items-start  justify-between text-gray-700"
      >
        <div className=" items-center flex flex-col text-center ">
          <h1 className="text-center font-semibold  md:font-bold text-3xl font-Bebas">
            CONTACT US DIRECTLY
          </h1>
          <div className="items-center flex flex-col md:flex-row py-8 ">
            <div className="flex py-8 md:pr-24 items-center">
              {/* <img className="sm:w-8 sm:h-8" src={iphone} alt="" /> */}
              <div className="items-center">
                <h1 className="text-center ">CONTACTS</h1>
                <p>+27 71 569 1123</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row pt-8 md:pt-0">
              {/* <img className="sm:w-8 sm:h-8 sm:hidden" src={email} alt="" /> */}
              <div className="md:pl-4">
                <h1 className="sm:text-center ">EMAIL</h1>
                <p className="sm:text-center ">uraclinespace3343@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mr-8">
          <div className="flex flex-col   md:mr-16">
            <h1 className=" text-2xl font-Bebas font-bold text-center ">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col items-center ">
              <li>
                <a href="#1">Buy Car</a>
              </li>
              <li>
                <a href="#2">Sell Car</a>
              </li>
              <li>
                <a href="#3">Marketing With Us</a>
              </li>
              <li>
                <a href="#4">About Us</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-Bebas font-bold py-8 md:py-0">
              NAVIGATION
            </h1>
            <ul className="text-center">
              <li>
                <a href="#1">Dealers</a>
              </li>
              <li>
                <a href="#2">Cars</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-purple-300 pr-24 pb-4 font-semibold">
        <p className=" border-b-8 border-blue-500">By UraclineSpace</p>
      </div>
      <div className="py-4 px-16 bg-gray-300">
        <p>&copy; {new Date().getFullYear()}, Copyright Reserved. </p>
      </div>
    </>
  );
}
