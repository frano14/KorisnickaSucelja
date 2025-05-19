import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const PsihologSidebar = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
        <Link
          to="/psiholog/novi-klijent"
          className="text-primary font-semibold hover:underline"
        >
          Kreiraj novog klijenta
        </Link>
        <button
          onClick={handleLogout}
          className="text-red-600 font-semibold hover:underline text-left hover:cursor-pointer"
        >
          Odjavi se
        </button>
      </nav>
    </div>
  );
};

export default PsihologSidebar;
