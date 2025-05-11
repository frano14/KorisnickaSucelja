import React from "react";
import { Link } from "react-router-dom";

const KlijentSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-6 space-y-6 flex flex-col">
      <nav className="flex flex-col space-y-4">
        <Link
          to="/klijent/"
          className="text-primary font-semibold hover:underline"
        >
          Početna
        </Link>
        <Link
          to="/klijent/"
          className="text-primary font-semibold hover:underline"
        >
          Moji termini
        </Link>
        <Link
          to="/klijent/"
          className="text-primary font-semibold hover:underline"
        >
          Moje obaveze
        </Link>
        <Link
          to="/klijent/profil"
          className="text-primary font-semibold hover:underline"
        >
          Profil
        </Link>
      </nav>
    </div>
  );
};

export default KlijentSidebar;
