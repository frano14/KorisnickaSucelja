import React from "react";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import KalendarTermina from "../../components/KalendarTermina";
import PsihologSidebar from "../../components/PsihologSidebar";

const Psiholog = () => {
  const klijenti = [
    { ime: "Ivana Horvat", email: "ivana@gmail.com", status: "Online" },
    { ime: "Marko Maric", email: "marko@gmail.com", status: "Away" },
    { ime: "Ana Kovač", email: "ana@gmail.com", status: "Offline" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PsihologSidebar />

      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Dobrodošli, Marko!
            </h1>
            <p className="text-[#04494B]">
              Upravljajte terminima i klijentima iz jednog mjesta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
              <FaCalendarAlt className="text-primary text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  3 termina
                </h2>
                <p className="text-[#04494B]">zakazana</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
              <FaUserFriends className="text-primary text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  3 klijenta
                </h2>
                <p className="text-[#04494B]">trenutno u sustavu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Kalendar termina
              </h2>
              <KalendarTermina />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Popis klijenata
              </h2>
              <ul className="divide-y">
                {klijenti.map((klijent, idx) => (
                  <li
                    key={idx}
                    className="py-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium text-[#04494B]">
                        {klijent.ime}
                      </p>
                      <p className="text-sm text-gray-500">{klijent.email}</p>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        klijent.status === "Online"
                          ? "text-green-600"
                          : klijent.status === "Away"
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    >
                      {klijent.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psiholog;
