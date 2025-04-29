import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

// Simulirani zauzeti datumi (možeš ih kasnije učitavati iz API-ja)
const zauzetiTermini = [
  new Date(2025, 4, 2), // 2.5.2025.
  new Date(2025, 4, 10), // 10.5.2025.
  new Date(2025, 4, 18), // 18.5.2025.
];

const isSameDay = (d1, d2) =>
  format(d1, "yyyy-MM-dd") === format(d2, "yyyy-MM-dd");

const KalendarTermina = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-primary mb-4">
        Kalendar termina
      </h2>
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
