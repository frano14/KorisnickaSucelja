import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Klijent from "./pages/Klijent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Psiholog from "./pages/Psiholog";
import Profil from "./pages/Psiholog/profil";
import ProfilKlijent from "./pages/Klijent/profil";
import KreirajKlijenta from "./pages/Psiholog/KreirajKlijenta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/klijent" element={<Klijent />} />
        <Route path="/psiholog" element={<Psiholog />} />
        <Route path="/psiholog/profil" element={<Profil />} />
        <Route path="/klijent/profil" element={<ProfilKlijent />} />
        <Route path="/psiholog/novi-klijent" element={<KreirajKlijenta />} />
      </Routes>
    </Router>
  );
}

export default App;
