import React from "react";

const PsihologSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-6 space-y-6 flex flex-col">
      <nav className="flex flex-col space-y-4">
        <a href="#" className="text-primary font-semibold hover:underline">
          Početna
        </a>
        <a href="#" className="text-primary font-semibold hover:underline">
          Profil
        </a>
        <a href="#" className="text-primary font-semibold hover:underline">
          Termini
        </a>
        <a href="#" className="text-primary font-semibold hover:underline">
          Moji klijenti
        </a>
        <a href="#" className="text-primary font-semibold hover:underline">
          Kreiraj novog klijenta
        </a>
      </nav>
    </div>
  );
};

export default PsihologSidebar;
