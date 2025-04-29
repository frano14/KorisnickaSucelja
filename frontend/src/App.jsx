import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Klijent from "./pages/Klijent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/klijent" element={<Klijent />} />
      </Routes>
    </Router>
  );
}

export default App;
