import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const KreirajKlijenta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await signup(email, name, phoneNumber, false); // ← isPshy = false
      navigate("/psiholog"); // ili gdje god želiš nakon uspjeha
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        {/* Naslov */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Novi klijent</h1>
          <p className="text-[#04494B]">Unesite osnovne podatke klijenta.</p>
        </div>

        {/* Forma */}
        <form className="space-y-4" onSubmit={handleSignUp}>
          {/* Ime */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Ime
              </span>
            </label>
            <input
              type="text"
              placeholder="Marko"
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="marko@example.com"
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Broj telefona */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Broj telefona
              </span>
            </label>
            <input
              type="tel"
              placeholder="+385 91 123 4567"
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          {/* Gumb */}
          <button className="btn btn-primary w-full text-white font-semibold text-sm mt-2">
            Kreiraj klijenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default KreirajKlijenta;
