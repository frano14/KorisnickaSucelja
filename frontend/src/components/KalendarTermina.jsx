import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const isSameDay = (d1, d2) =>
  format(d1, "yyyy-MM-dd") === format(d2, "yyyy-MM-dd");

const KalendarTermina = ({ sessions = [] }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const zauzetiTermini = sessions.map((d) => new Date(d));

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
