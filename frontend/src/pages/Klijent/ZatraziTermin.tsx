import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const ZatraziTermin = ({ isOpen, onClose }) => {
  const today = new Date(2025, 3, 29); // 29.04.2025. (Mjesec je 0-indeksiran!)

  const zauzetiTermini = [
    new Date(2025, 4, 2),
    new Date(2025, 4, 10),
    new Date(2025, 4, 18),
  ];

  const [selectedDate, setSelectedDate] = useState("");

  if (!isOpen) return null;

  const isZauzet = (date) => {
    return zauzetiTermini.some(
      (zauzet) => format(zauzet, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const dateToSend = new Date(selectedDate).getTime(); // timestamp
      await axios.post("http://localhost:3000/api/users/session", {
        date: dateToSend,
      });
      alert("Termin je uspješno zatražen!");
      onClose();
    } catch (error) {
      console.error("Greška pri slanju termina:", error);
      alert("Greška prilikom slanja termina.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Zatraži novi termin
        </h2>

        {/* Date Picker */}
        <div className="flex flex-col space-y-2 mb-6">
          <label className="text-[#04494B] font-semibold">Odaberi datum:</label>
          <input
            type="date"
            min={format(today, "yyyy-MM-dd")}
            className="input input-bordered"
            value={selectedDate}
            onChange={handleDateChange}
          />
          {selectedDate && isZauzet(new Date(selectedDate)) && (
            <p className="text-red-500 text-sm">Taj datum je već zauzet!</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="btn btn-outline btn-error">
            Odustani
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedDate || isZauzet(new Date(selectedDate))}
            className="btn btn-primary text-white disabled:opacity-50"
          >
            Potvrdi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZatraziTermin;
