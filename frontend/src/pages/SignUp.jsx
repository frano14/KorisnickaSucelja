import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        {/* Naslov */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Solara</h1>
          <p className="text-[#04494B]">Kreirajte vaš korisnički račun.</p>
        </div>

        {/* Forma */}
        <form className="space-y-4">
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
              placeholder="Markić"
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
            />
          </div>

          {/* Mail */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#04494B] font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="markomarkic@gmail.com"
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
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
              placeholder="+123 45 678 910"
              className="input input-bordered w-full bg-white text-[#04494B] placeholder:text-[#04494B99]"
            />
          </div>

          {/* Gumb */}
          <button className="btn btn-primary w-full text-white font-semibold text-sm mt-2">
            Registriraj se
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
