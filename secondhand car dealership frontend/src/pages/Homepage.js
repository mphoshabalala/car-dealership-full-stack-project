import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DealersSection from "../components/DealersSection";
import CarsSection from "../components/CarsSection";
import SellYourCar from "./SellYourCar";
import SellYourCarSection from "../components/SellYourCarSection";

export default function Homepage() {
  return (
    <div className="text-gray-900 bg-gray-100">
      <Header />
      <Hero />
      <CarsSection />
      <DealersSection />
      <SellYourCarSection />
      <Footer />
    </div>
  );
}
