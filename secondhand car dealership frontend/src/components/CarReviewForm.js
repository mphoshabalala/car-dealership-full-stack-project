import React, { useState } from "react";
// import supabase from "../supabase_config/supabase";
import { useNavigate } from "react-router-dom";

export default function CarReviewForm({ carModel, carBrand, id }) {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState("");
  const [email, setEmail] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [formError, setFormError] = useState(null);
  const brand = carModel;
  const model = carBrand;
  const navigate = useNavigate();
  // console.log(Brand, Model, id, fromDate, toDate);
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!name || !contacts || !email || !fromDate || !toDate) {
  //     setFormError("Please fill in all the blanks");
  //     return;
  //   }

  //   const { data, error } = await supabase
  //     .from("carsForReview")
  //     .insert({ brand, model, name, contacts, email, fromDate, toDate });

  //   if (error) {
  //     console.log(error);
  //     setFormError("Please fill in all the blanks correctly");
  //   }

  //   if (data) {
  //     console.log(data);
  //     setFormError(null);
  //     navigate("/");
  //   }
  // };
  return (
    <div className=" h-full my-8 mx-8 p-8 font-bold text-gray-700">
      <h1 className="text-5xl text-blue-600">
        Do you like this car? fill the form below to book for a car review with
        the dealer.
      </h1>

      <form
        className=" w-full flex flex-col items-center justify-center mt-16"
        // onSubmit={handleFormSubmit}
      >
        {formError && <p>{formError}</p>}
        <input
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="text"
          placeholder=" Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="text"
          placeholder="Contacts"
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
        />
        <input
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor="date">To:</label>
          <input
            type="date"
            className="border m-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-80 p-4 bg-blue-700 mt-4 text-gray-50 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
