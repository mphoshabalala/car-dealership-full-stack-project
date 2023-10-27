import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SellYourCar() {
  return (
    <>
      <Header />
      <div className="pt-24 w-full flex flex-col  items-center bg-gray-100 px-16">
        <div className="block  border-spacing-4 border-red-400 border-b-4 md:border-b-8 mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-Bebas text-gray-700">
            SELL YOUR CAR
          </h1>
        </div>
        <p className="md:text-2xl font-semibold text-center md:text-start text-gray-700">
          Let us help you sell your car to one of our professional deales.
        </p>

        <form className="w-full flex flex-col " action="">
          <div className="flex flex-col">
            <div className="w-full flex justify-center items-center flex-col ">
              <h1 className="text-2xl font-semibold md:font-bold text-gray-700">
                Car Properties
              </h1>
              <div className="flex flex-col items-center">
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Model"
                  required
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Brand"
                  required
                />
                <div className="my-4 ">
                  <p className="text-green-600 pl-4">Date of purchase</p>
                  <input
                    className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                    type="date"
                    placeholder="Year of purchase"
                    required
                  />
                </div>
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Mile age"
                  required
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Type, e.g. Sedan, SUV"
                  required
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Drive mode, e.g Automatic"
                  required
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Fuel Type, e.g Petrol"
                  required
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Max speed"
                  required
                />
                <p className="text-red-600">
                  Note: other features will be considerd after you have been
                  called for a review
                </p>
              </div>
            </div>
            <div className=" flex justify-center flex-col  items-center font-bold text-gray-700 ">
              <h1 className="text-2xl font-bold text-gray-700 mt-8">
                Car Images
              </h1>
              <div className="flex flex-col m-4">
                <p className="py-2">Full Exterior :</p>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  class="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Interior dashboard :</p>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  class="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Two interior images :</p>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  class="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  class="py-2 mt-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Engine :</p>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  class="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            <div className=" flex justify-center flex-col  items-center font-bold text-gray-700 ">
              <h1 className="text-2xl font-semibold md:font-bold text-gray-700 mt-8">
                Your documents
              </h1>
              <div className="flex flex-col m-4">
                <p className="py-2">certified ID copy(pdf) :</p>
                <input
                  type="file"
                  name="image"
                  accept=".pdf"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">
                  Certified copy of your car registration document(pdf) :
                </p>
                <input
                  type="file"
                  name="image"
                  accept=".pdf"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </div>
          <div className="flex  justify-center">
            <button className="font-bold text-2xl bg-blue-300 px-8 py-2 rounded border-none block text-gray-700">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
