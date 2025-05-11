import React from "react";
import { Link } from "react-router-dom";

const PsihologSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-6 space-y-6 flex flex-col">
      <nav className="flex flex-col space-y-4">
        <Link
          to="/psiholog"
          className="text-primary font-semibold hover:underline"
        >
          Početna
        </Link>
        <Link
          to="/psiholog/profil"
          className="text-primary font-semibold hover:underline"
        >
          Profil
        </Link>
        <Link to="#" className="text-primary font-semibold hover:underline">
          Termini
        </Link>
        <Link to="#" className="text-primary font-semibold hover:underline">
          Moji klijenti
        </Link>
        <Link
          to="/psiholog/novi-klijent"
          className="text-primary font-semibold hover:underline"
        >
          Kreiraj novog klijenta
        </Link>
      </nav>
    </div>
  );
};

export default PsihologSidebar;
