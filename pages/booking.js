import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSummary from '../components/BookingSummary';
import CalendarView from '../components/CalendarView';

export default function BookingPage() {
  const [formData, setFormData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center">Restaurant Table Booking</h1>

      {!formData ? (
        <div className="mt-8">
          <CalendarView onDateSelect={handleDateSelect} />
          <BookingForm onSubmit={handleFormSubmit} />
        </div>
      ) : (
        <BookingSummary reservation={formData} />
      )}
    </div>
  );
}
