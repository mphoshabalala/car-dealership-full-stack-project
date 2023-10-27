import React from "react";
import { useDealers } from "../contexts/dealersContext";
import Dealer from "./Dealer";
import Loading from "./Loading";

export default function Dealers() {
  const { dealers, isLoading } = useDealers();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      id="dealers"
      className="py-32 px-8 md:px-16 flex justify-center items-center flex-col bg-gray-100"
    >
      <div className="block  border-spacing-4 border-red-400 border-b-8 mb-16">
        <h1 className="text-5xl font-Bebas">OUR DEALERS</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {dealers.map((dealer) => (
          <Dealer key={dealer.id} dealer={dealer} />
        ))}
      </div>
    </div>
  );
}
