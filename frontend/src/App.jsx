import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Klijent from "./views/Klijent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/klijent" element={<Klijent />} />
      </Routes>
    </Router>
  );
}

export default App;
