import React, { useState } from "react";
import { FaCalendarAlt, FaUserCircle, FaComments } from "react-icons/fa";
import KlijentSidebar from "../../components/KlijentSidebar";
import ZatraziTermin from "./ZatraziTermin";
import { useAuthStore } from "../../store/authStore";

const Klijent = () => {
  const { user } = useAuthStore()
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <KlijentSidebar />
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white shadow-lg rounded-xl p-8 flex items-center space-x-6">
            <FaUserCircle className="text-primary text-5xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Pozdrav, {user?.name}!
              </h1>
              <p className="text-[#04494B]">
                Dobrodošli na svoj dashboard. Ovdje možete upravljati obavezama
                i kontaktirati psihologa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <FaCalendarAlt className="text-primary text-4xl mb-3" />
              <h2 className="text-xl font-semibold text-primary">3 termina</h2>
              <p className="text-[#04494B]">zakazana</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <FaComments className="text-primary text-4xl mb-3" />
              <h2 className="text-xl font-semibold text-primary">2 poruke</h2>
              <p className="text-[#04494B]">u razgovoru</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <FaUserCircle className="text-primary text-4xl mb-3" />
              <h2 className="text-xl font-semibold text-primary">Profil</h2>
              <p className="text-[#04494B]">pogledaj detalje</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Vaše nadolazeće obaveze
            </h2>
            <ul className="list-disc list-inside text-[#04494B] space-y-2">
              <li>Psihološko savjetovanje - 02.05.2025. u 14:00h</li>
              <li>Kontrolni razgovor - 10.05.2025. u 10:30h</li>
              <li>Radionica samopomoći - 18.05.2025. u 17:00h</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <button
              className="btn btn-primary btn-wide text-white text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Zatraži novi termin
            </button>
          </div>
        </div>
      </div>

      <ZatraziTermin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Klijent;
