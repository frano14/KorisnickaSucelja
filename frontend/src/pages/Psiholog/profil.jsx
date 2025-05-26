import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaLock,
  FaCog,
  FaSave,
  FaUserEdit,
} from "react-icons/fa";
import PsihologSidebar from "../../components/PsihologSidebar";
import { useAuthStore } from "../../store/authStore";

const Profil = () => {
  const { user, clients } = useAuthStore();
  const [psiholog, setPsiholog] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (user) {
      setPsiholog({
        ime: user.name || "",
        email: user.email || "",
        telefon: user.phoneNumber || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPsiholog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Spremam podatke psihologa:", psiholog);
    setEditMode(false);
  };

  if (!psiholog) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PsihologSidebar />

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-6">
            <FaUserCircle className="text-primary text-6xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary">
                {psiholog.ime}
              </h1>
              <p className="text-gray-600">
                {psiholog.email} | +{psiholog.telefon}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <p className="text-sm text-gray-500">Ukupno sesija</p>
              <h3 className="text-2xl font-bold text-primary">
                {user.sessions?.length ?? 0}
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <p className="text-sm text-gray-500">Broj klijenata</p>
              <h3 className="text-2xl font-bold text-primary">
                {clients?.length ?? 0}
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <p className="text-sm text-gray-500">Prosječna ocjena</p>
              <h3 className="text-2xl font-bold text-primary">4.9/5 ⭐</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <FaUserEdit className="text-primary text-3xl mb-3" />
              <h2 className="text-lg font-semibold text-primary mb-1">
                Uredi profil
              </h2>
              {editMode ? (
                <div className="space-y-3">
                  <input
                    name="ime"
                    value={psiholog.ime}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                  />

                  <input
                    name="email"
                    value={psiholog.email}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                  />
                  <input
                    name="telefon"
                    value={psiholog.telefon}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
                  />
                </div>
              ) : (
                <p className="text-sm text-gray-600">
                  <strong>Ime:</strong> {psiholog.ime} <br />
                  <strong>Email:</strong> {psiholog.email} <br />
                  <strong>Telefon: +</strong>{psiholog.telefon}
                </p>
              )}
              <button
                className={`mt-4 btn ${
                  editMode ? "btn-success" : "btn-primary"
                } text-white flex items-center gap-2`}
                onClick={editMode ? handleSave : () => setEditMode(true)}
              >
                {editMode ? (
                  <>
                    <FaSave /> Spremi
                  </>
                ) : (
                  <>
                    <FaEdit /> Uredi
                  </>
                )}
              </button>
            </div>

            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <FaLock className="text-primary text-3xl mb-3" />
              <h2 className="text-lg font-semibold text-primary mb-1">
                Sigurnost
              </h2>
              <p className="text-sm text-gray-600">
                Promijenite lozinku ili omogućite dvofaktorsku autentikaciju.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <FaCog className="text-primary text-3xl mb-3" />
              <h2 className="text-lg font-semibold text-primary mb-1">
                Postavke
              </h2>
              <p className="text-sm text-gray-600">
                Upravite notifikacijama i postavkama aplikacije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
