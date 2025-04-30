import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Solara</h1>
          <p className="text-[#04494B]">Prijavite se u svoj račun</p>
        </div>

        <fieldset className="form-control space-y-3">
          <label className="label">
            <span className="label-text text-[#04494B] font-semibold">
              Unos šifre
            </span>
          </label>
          <input
            type="password"
            placeholder="Šifra"
            className="input input-bordered w-full placeholder:text-[#04494B99] text-[#04494B] focus:border-primary bg-white"
          />
        </fieldset>

        <button className="btn btn-primary w-full text-white font-semibold text-sm">
          Prijavi se
        </button>
      </div>
    </div>
  );
};

export default Login;
