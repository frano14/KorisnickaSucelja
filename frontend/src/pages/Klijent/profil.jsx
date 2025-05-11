import React, { useState } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaPhoneAlt,
  FaEnvelope,
  FaSave,
} from "react-icons/fa";
import KlijentSidebar from "../../components/KlijentSidebar";

const ProfilKlijent = () => {
  const [klijent, setKlijent] = useState({
    ime: "Frano Marić",
    email: "frano.maric@gmail.com",
    telefon: "+385 91 765 4321",
    godine: 28,
    status: "Aktivan korisnik",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKlijent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Spremi promjene:", klijent);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <KlijentSidebar />

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-6">
            <FaUserCircle className="text-primary text-6xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary">{klijent.ime}</h1>
              <p className="text-[#04494B]">{klijent.status}</p>
              <p className="text-gray-600">
                <FaEnvelope className="inline mr-1" /> {klijent.email}
              </p>
              <p className="text-gray-600">
                <FaPhoneAlt className="inline mr-1" /> {klijent.telefon}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-primary mb-2">
                Osnovne informacije
              </h2>
              {editMode ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#04494B]">
                      Ime
                    </label>
                    <input
                      name="ime"
                      value={klijent.ime}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#04494B]">
                      Email
                    </label>
                    <input
                      name="email"
                      value={klijent.email}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#04494B]">
                      Telefon
                    </label>
                    <input
                      name="telefon"
                      value={klijent.telefon}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#04494B]">
                      Godine
                    </label>
                    <input
                      name="godine"
                      type="number"
                      value={klijent.godine}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                    />
                  </div>
                </div>
              ) : (
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Ime:</strong> {klijent.ime}
                  </li>
                  <li>
                    <strong>Email:</strong> {klijent.email}
                  </li>
                  <li>
                    <strong>Telefon:</strong> {klijent.telefon}
                  </li>
                  <li>
                    <strong>Godine:</strong> {klijent.godine}
                  </li>
                </ul>
              )}
            </div>

            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-primary mb-2">
                Postavke profila
              </h2>
              <p className="text-gray-600 mb-2">
                Ovdje možete prilagoditi svoj račun i kontakt podatke.
              </p>
              {editMode ? (
                <button
                  className="btn btn-success text-white flex items-center gap-2"
                  onClick={handleSave}
                >
                  <FaSave /> Spremi promjene
                </button>
              ) : (
                <button
                  className="btn btn-primary text-white flex items-center gap-2"
                  onClick={() => setEditMode(true)}
                >
                  <FaEdit /> Uredi profil
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilKlijent;
