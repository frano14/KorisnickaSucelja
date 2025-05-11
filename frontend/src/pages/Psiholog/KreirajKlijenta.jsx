import React, { useState } from "react";

const KreirajKlijenta = () => {
  const [klijent, setKlijent] = useState({
    ime: "",
    prezime: "",
    godinaRodenja: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKlijent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novi klijent:", klijent);
    // TODO: pozvati backend za spremanje
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Novi klijent</h1>
          <p className="text-[#04494B]">Unesite podatke novog klijenta.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ime */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Ime
              </span>
            </label>
            <input
              type="text"
              name="ime"
              placeholder="Frano"
              value={klijent.ime}
              onChange={handleChange}
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
              required
            />
          </div>

          {/* Prezime */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Prezime
              </span>
            </label>
            <input
              type="text"
              name="prezime"
              placeholder="Marić"
              value={klijent.prezime}
              onChange={handleChange}
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
              required
            />
          </div>

          {/* Godina rođenja */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Godina rođenja
              </span>
            </label>
            <input
              type="number"
              name="godinaRodenja"
              placeholder="1995"
              value={klijent.godinaRodenja}
              onChange={handleChange}
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold text-sm mt-2"
          >
            Kreiraj klijenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default KreirajKlijenta;
