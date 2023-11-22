import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ToTop";
import axios from "axios";
// import { useSellYourCarContext } from "../contexts/sellYourCarContext";

const BASE_URL = "http://localhost:8000/api/v1/sellers";

export default function SellYourCar() {
  const [soldCar, setSoldCars] = useState({});

  const [form, setForm] = useState({
    model: "",
    brand: "",
    dateOfPurchase: "",
    mileage: "",
    carType: "",
    driveMode: "",
    fuelType: "",
    maxSpeed: "",
    fullCarExteriorImg: "",
    interiorDahboardImg: "",
    interior1Img: "",
    interior2Img: "",
    engineImg: "",
    yourIdImg: "",
    carRegistrationImg: "",
  });

  // decode images to base 64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        resolve(fr.result);
      };
      fr.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = async (e, field) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const base64 = await convertToBase64(file);
      console.log(base64);
      setForm((prevForm) => ({ ...prevForm, [field]: base64 }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const formData = new FormData();
    formData.append("model", form.model);
    formData.append("brand", form.brand);
    formData.append("dateOfPurchase", form.dateOfPurchase);
    formData.append("mileage", form.mileage);
    formData.append("carType", form.carType);
    formData.append("driveMode", form.driveMode);
    formData.append("fuelType", form.fuelType);
    formData.append("maxSpeed", form.maxSpeed);

    // File fields
    formData.append("fullCarExteriorImg", form.fullCarExteriorImg);
    formData.append("interiorDahboardImg", form.interiorDahboardImg);
    formData.append("interior1Img", form.interior1Img);
    formData.append("interior2Img", form.interior2Img);
    formData.append("engineImg", form.engineImg);
    formData.append("yourIdImg", form.yourIdImg);
    formData.append("carRegistrationImg", form.carRegistrationImg);
    try {
      const response = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to submit data");
      }

      // Reset form after successful submission
      setForm({
        model: "",
        brand: "",
        dateOfPurchase: "",
        mileage: "",
        carType: "",
        driveMode: "",
        fuelType: "",
        maxSpeed: "",
        fullCarExteriorImg: "",
        interiorDahboardImg: "",
        interior1Img: "",
        interior2Img: "",
        engineImg: "",
        yourIdImg: "",
        carRegistrationImg: "",
      });

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="pt-24 w-full flex flex-col  items-center bg-gray-100 px-16">
        <div className="block  border-spacing-4 border-red-400 border-b-4 md:border-b-8 mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-Bebas text-gray-700">
            SELL YOUR CAR
          </h1>
        </div>
        <p className="md:text-2xl font-semibold text-center md:text-start text-gray-700">
          Let us help you sell your car to one of our professional deales.
        </p>

        <form className="w-full flex flex-col " onSubmit={handleSubmit}>
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
                  value={form.model}
                  onChange={(e) => handleInputChange(e)}
                  name="model"
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Brand"
                  required
                  value={form.brand}
                  onChange={handleInputChange}
                  name="brand"
                />
                <div className="my-4 ">
                  <p className="text-green-600 pl-4">Date of purchase</p>
                  <input
                    className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                    type="date"
                    placeholder="Year of purchase"
                    required
                    value={form.dateOfPurchase}
                    onChange={handleInputChange}
                    name="dateOfPurchase"
                  />
                </div>
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Mile age"
                  required
                  value={form.mileage}
                  onChange={handleInputChange}
                  name="mileage"
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Type, e.g. Sedan, SUV"
                  required
                  value={form.carType}
                  onChange={handleInputChange}
                  name="carType"
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Drive mode, e.g Automatic"
                  required
                  value={form.driveMode}
                  onChange={handleInputChange}
                  name="driveMode"
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Fuel Type, e.g Petrol"
                  required
                  value={form.fuelType}
                  onChange={handleInputChange}
                  name="fuelType"
                />
                <input
                  className="text-gray-700 text-semibold w-80 my-2 md:my-4 px-2 md:px-4 py-2 font-semibold md:font-bold"
                  type="text"
                  placeholder="Max speed"
                  required
                  value={form.maxSpeed}
                  onChange={handleInputChange}
                  name="maxSpeed"
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
                  onChange={(e) => handleFileChange(e, "fullCarExteriorImg")}
                  name="fullCarExteriorImg"
                  accept="image/*"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Interior dashboard :</p>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "interiorDahboardImg")}
                  name="interiorDahboardImg"
                  accept="image/*"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Two interior images :</p>
                <input
                  type="file"
                  name="interior1Img"
                  onChange={(e) => handleFileChange(e, "interior1Img")}
                  accept="image/*"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                  type="file"
                  name="interior2Img"
                  onChange={(e) => handleFileChange(e, "interior2Img")}
                  accept="image/*"
                  className="py-2 mt-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Engine :</p>
                <input
                  type="file"
                  name="engineImg"
                  onChange={(e) => handleFileChange(e, "engineImg")}
                  accept="image/*"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                  name="yourIdImg"
                  onChange={(e) => handleFileChange(e, "yourIdImg")}
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
                  name="carRegistrationImg"
                  onChange={(e) => handleFileChange(e, "carRegistrationImg")}
                  accept=".pdf"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </div>
          <div className="flex  justify-center">
            <button
              type="submit"
              className="font-bold text-2xl bg-blue-300 px-8 py-2 rounded border-none block text-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
