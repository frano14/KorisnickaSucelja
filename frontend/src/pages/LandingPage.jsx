import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] flex flex-col items-center justify-center px-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#04494B]">Dobrodošli u Solara</h1>
        <p className="mt-4 text-lg text-[#04494B] max-w-xl mx-auto">
          Psihološka ordinacija koja vam pomaže da pronađete unutarnji mir i ravnotežu. 
          Prijavite se ili registrirajte kako biste započeli svoje putovanje prema mentalnom zdravlju.
        </p>
      </div>

      <div className="flex gap-6">
        <Link
          to="/login"
          className="btn btn-primary text-white px-6 py-3 rounded-lg text-lg shadow-md"
        >
          Prijava
        </Link>
        <Link
          to="/signup"
          className="btn border border-primary text-primary px-6 py-3 rounded-lg text-lg shadow-md hover:bg-primary hover:text-white"
        >
          Registracija
        </Link>
      </div>

      <div className="mt-16 text-center text-[#04494B99] text-sm">
        <p>Solara © {new Date().getFullYear()} — Sva prava pridržana</p>
      </div>
    </div>
  );
};

export default LandingPage;
