import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div>
        <h1>About Us</h1>
        <p>
          Ecowheels is an online solution that seeks to provide a central
          location for facilitating purchasing and selling process of vehicles,
          we work with small but well established car dealerships in South
          Africa, furthermore, our aim is to expose all the secondhand car
          dealerships to the market across South Africa and the neighbouring
          countries
        </p>

        <p>
          At EcoWheels exchange we believe that theres a need for people to be
          exposed to a variety of options when it comes to vehicle purchase, and
          that is why we give our customers and dealers oppotunity to sell and
          buy cars at an affordable price.
        </p>

        <p>We also offer a platform for marketing your vehicle </p>
      </div>
      <Footer />
    </>
  );
}
