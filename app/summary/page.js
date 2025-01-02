"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function BookingSummary() {
  const searchParams = useSearchParams();

  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");

  return (
    <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl rounded-lg max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-extrabold text-center text-white mb-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded">
        Booking Summary
      </h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <p className="text-lg text-gray-200 mb-4">
          <strong className="text-blue-300">Date:</strong> {date}
        </p>
        <p className="text-lg text-gray-200 mb-4">
          <strong className="text-blue-300">Time:</strong> {time}
        </p>
        <p className="text-lg text-gray-200 mb-4">
          <strong className="text-blue-300">Number of Guests:</strong> {guests}
        </p>
        <p className="text-lg text-gray-200 mb-4">
          <strong className="text-blue-300">Name:</strong> {name}
        </p>
        <p className="text-lg text-gray-200 mb-4">
          <strong className="text-blue-300">Contact:</strong> {contact}
        </p>
      </div>
      <button
        onClick={() => window.history.back()}
        className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Go Back
      </button>
    </div>
  );
}
