import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Loading() {
  return (
    <div className="loading-state">
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-3xl font-bold font-Bebas">Loading...</p>
      </div>
      <Footer />
    </div>
  );
}
