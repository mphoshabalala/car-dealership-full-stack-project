import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useCars } from "../contexts/carsContext";
import calender from "../images/calendar.png";
import mileage from "../images/mileage.png";
import automatic from "../images/automatic.png";
import manual from "../images/manual.png";
import fuel from "../images/gas.png";
import bluetooth from "../images/bluetooth.png";
import electricWindows from "../images/car-window.png";
import airConditioning from "../images/air-conditioning.png";
import usb from "../images/usb.png";
import remote from "../images/car-key.png";
import pressureSensor from "../images/tyre.png";
import engine from "../images/engineLitres.png";
import fuelCapacity from "../images/fuel.png";
import maximumTopSpeed from "../images/speed.png";
import sunroof from "../images/car.png";
import airbag from "../images/airbag.png";
import Loading from "../components/Loading";

export default function DetailedCar() {
  const location = useLocation();
  const carId = location.pathname.replace("/cars/", "").toString();
  const { getCar, isLoading, error, currentCar } = useCars();
  console.log(carId);
  useEffect(() => {
    getCar(carId);
  }, [carId]);

  if (isLoading) {
    return <Loading />;
  }
  if (error.message !== undefined) {
    console.log(error.message);
    return <div>{error.message}</div>;
  }
  return (
    <>
      <Header />
      <div className="pt-24 w-full flex flex-col  items-center bg-gray-100 text-gray-800">
        <div className="block  border-spacing-4 border-red-400 border-b-8 md:mb-16">
          <h1 className="text-5xl font-Bebas">
            {currentCar.brand} {currentCar.model}
          </h1>
        </div>
        <div className="w-full px-8 md:px-24 py-8 flex flex-col md:flex-row">
          {currentCar.images ? (
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={currentCar.images[0]} alt="" />
            </div>
          ) : (
            <div>Image Loading</div>
          )}
          <div className="w-full md:w-1/2 bg-white">
            <h1 className="px-4 font-bold font-Bebas text-4xl">
              R{currentCar.price}
            </h1>
            <ul className="p-4 font-bold text-gray-700 flex flex-wrap">
              <h1 className="pr-4">Primary: </h1>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={calender} alt="" />
                <p>{currentCar.year}</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                <img className="h-4 w-4 mr-2" src={mileage} alt="" />
                <p>{currentCar.mileageLeft}km</p>
              </li>

              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                {currentCar.driveMode === "Automatic" ? (
                  <>
                    <img className="h-4 w-4 mr-2" src={automatic} alt="" />
                    <p>{currentCar.driveMode}</p>
                  </>
                ) : (
                  <>
                    <img className="h-4 w-4 mr-2" src={manual} alt="" />
                    <p>{currentCar.driveMode}</p>
                  </>
                )}
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                <img className="h-4 w-4 mr-2" src={fuel} alt="" />
                <p>{currentCar.fuelType}</p>
              </li>
            </ul>

            <ul className="p-4 font-bold text-gray-700 flex flex-wrap">
              <h1 className="pr-4">Technology: </h1>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={bluetooth} alt="" />
                <p>Bluetooth: {currentCar.bluetoothConnectivity}</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={electricWindows} alt="" />
                <p>Electric Windows: {currentCar.electricWindows}</p>
              </li>

              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={airConditioning} alt="" />
                <p>Air Conditioning: {currentCar.airConditioning}</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={usb} alt="" />
                <p>USB: {currentCar.usbPort}</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={remote} alt="" />
                <p>Remote Locking: {currentCar.remoteCentralLocking}</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={pressureSensor} alt="" />
                <p>Tyre Pressure Sensor: {currentCar.tyrePressureSensor}</p>
              </li>
            </ul>

            <ul className="p-4 font-bold text-gray-700 flex flex-wrap">
              <h1 className="pr-4">Features: </h1>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2 mb-2">
                <img className="h-4 w-4 mr-2" src={engine} alt="" />
                <p>Engine Capacity: {currentCar.engineCapacityLitre} litres</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={fuelCapacity} alt="" />
                <p>Fuel Capacity: {currentCar.fuelCapacity} litres</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={fuelCapacity} alt="" />
                <p>
                  Fuel Consumption Avg: {currentCar.fuelConsumptionAverage}
                  litres/km
                </p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={maximumTopSpeed} alt="" />
                <p>Top Speed: {currentCar.maximumTopSpeed} km/h max</p>
              </li>
              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={sunroof} alt="" />
                <p>Sunroof: {currentCar.sunroof}</p>
              </li>

              <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
                <img className="h-4 w-4 mr-2" src={airbag} alt="" />
                <p>Airbag Quantity: {currentCar.airbagQuantity}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
