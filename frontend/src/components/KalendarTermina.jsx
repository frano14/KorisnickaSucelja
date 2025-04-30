import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const zauzetiTermini = [
  new Date(2025, 4, 2),
  new Date(2025, 4, 10),
  new Date(2025, 4, 18),
];

const isSameDay = (d1, d2) =>
  format(d1, "yyyy-MM-dd") === format(d2, "yyyy-MM-dd");

const KalendarTermina = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="bg-white p-6 rounded-lg max-w-lg mx-auto">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) =>
          zauzetiTermini.some((z) => isSameDay(z, date))
            ? "react-calendar__tile--occupied"
            : ""
        }
      />

      {selectedDate && (
        <div className="mt-4 text-[#04494B]">
          Odabrali ste datum:{" "}
          <strong>{format(selectedDate, "dd.MM.yyyy.")}</strong>
        </div>
      )}
    </div>
  );
};

export default KalendarTermina;
