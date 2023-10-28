import React from "react";
import Header from "../components/Header";
import Dealers from "../components/Dealers";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ToTop";

export default function DealersPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Dealers />
      <Footer />
    </>
  );
}
