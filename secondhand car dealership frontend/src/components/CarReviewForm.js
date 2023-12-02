import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/orders";

export default function CarReviewForm({ carModel, carBrand, id }) {
  const [form, setForm] = useState({
    name: "",
    contacts: "",
    email: "",
    fromDate: "",
    toDate: "",
    model: carModel,
    brand: carBrand,
    carId: id,
  });
  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // console.log(Brand, Model, id, fromDate, toDate);
  const handleFormSubmit = async (e) => {
    console.log(form);
    e.preventDefault();
    const response = await axios.post(BASE_URL, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to submit data");
    }

    setForm({
      name: "",
      contacts: "",
      email: "",
      fromDate: "",
      toDate: "",
      model: carModel,
      brand: carBrand,
      carId: id,
    });
  };
  return (
    <div className=" h-full my-8 mx-8 p-8 font-bold text-gray-700">
      <h1 className="text-5xl text-blue-600">
        Do you like this car? fill the form below to book for a car review with
        the dealer.
      </h1>

      <form
        className=" w-full flex flex-col items-center justify-center mt-16"
        onSubmit={handleFormSubmit}
      >
        {formError && <p>{formError}</p>}
        <input
          required
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="text"
          placeholder=" Full name"
          value={form.name}
          onChange={(e) => handleInputChange(e)}
          name="name"
        />
        <input
          required
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="text"
          placeholder="Contacts"
          value={form.contacts}
          onChange={(e) => handleInputChange(e)}
          name="contacts"
        />
        <input
          required
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleInputChange(e)}
          name="email"
        />
        <p className="text-red-700">
          When Will you be available for a review?, we can fit you in our
          schedule and help you get your car, pick any two dates below while the
          car is still available.
        </p>
        <div className="">
          <label htmlFor="date">From:</label>
          <input
            type="date"
            className="border m-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            value={form.fromDate}
            onChange={(e) => handleInputChange(e)}
            required
            name="fromDate"
          />
        </div>

        <div className="">
          <label htmlFor="date">To:</label>
          <input
            type="date"
            className="border m-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            value={form.toDate}
            onChange={(e) => handleInputChange(e)}
            required
            name="toDate"
          />
        </div>

        <button
          type="submit"
          className="w-80 p-4 bg-blue-700 mt-4 text-gray-50 hover:bg-blue-600"
        >
          REQUEST REVIEW
        </button>
      </form>
    </div>
  );
}
