"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (formData.date) {
      fetch(`/api/availability?date=${formData.date}`)
        .then((response) => response.json())
        .then((data) => {
          setAvailableTimes(data.available || []);
        });
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://restaurant-booking-backend-qcrq.onrender.com/api/booking/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          router.push(
            `/summary?date=${formData.date}&time=${formData.time}&guests=${formData.guests}&name=${formData.name}&contact=${formData.contact}`
          );
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Failed to book. Try again.");
        }
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.guests) errors.guests = "Number of guests is required";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.contact) errors.contact = "Contact is required";
    return errors;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 p-6 bg-gray-800 text-white shadow-lg rounded-lg max-w-lg mx-auto border border-gray-700"
    >
      <h1 className="text-3xl font-extrabold text-center text-gradient bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded">
        Reserve Your Table
      </h1>

      {errorMessage && (
        <p className="text-red-400 bg-red-800 p-2 rounded-md text-center">{errorMessage}</p>
      )}

      <div>
        <label className="block text-sm font-semibold">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Time</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select Time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.contact && <p className="text-red-400 text-xs mt-1">{errors.contact}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-md shadow-lg hover:from-teal-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Book Now
      </button>
    </form>
  );
}
