import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarView({ onDateSelect }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <div className="max-w-md mx-auto">
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="mx-auto"
      />
    </div>
  );
}
