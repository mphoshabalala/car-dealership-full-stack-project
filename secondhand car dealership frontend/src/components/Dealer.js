import React from "react";

export default function Dealer({ dealer, index }) {
  if (index % 2 === 0) {
    return (
      <div className="w-full  mb-4 md:mb-0 md:m-8 rounded p-4 shadow-small bg-red-200 font-semibold text-gray-700 border-b-red-400 flex flex-col md:flex-row">
        <img
          className=" w-full md:w-64  h-64 mr-8"
          src={dealer.dealerImg}
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold">
            {dealer.owner}, {dealer.companyName}
          </h1>
          <p>Company: {dealer.companyName}</p>
          <p>Location: {dealer.dealerLocation}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full  mb-4 md:mb-0 md:m-8 rounded p-4 shadow-small bg-blue-200 font-semibold text-gray-700 border-b-red-400 flex flex-col md:flex-row">
        <div>
          <h1 className="text-3xl font-bold">
            {dealer.owner}, {dealer.companyName}
          </h1>
          <p>Company: {dealer.companyName}</p>
          <p>Location: {dealer.dealerLocation}</p>
        </div>
        <img
          className="w-full md:w-64 h-64 mr-8"
          src={dealer.dealerImg}
          alt=""
        />
      </div>
    );
  }
}
