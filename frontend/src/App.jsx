import React, { use, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Klijent from "./pages/Klijent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Psiholog from "./pages/Psiholog";
import Profil from "./pages/Psiholog/profil";
import ProfilKlijent from "./pages/Klijent/profil";
import KreirajKlijenta from "./pages/Psiholog/KreirajKlijenta";
import LandingPage from "./pages/LandingPage";
import { useAuthStore } from "./store/authStore";

const PshyRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (user && user.isPshy) {
    return <Navigate to="/psiholog" />;
  }
  return children; 
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  console.log("isAuthenticated:", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  console.log("isAuthenticated:", isAuthenticated);

  return children; 
}

const RedirectAuthenticatedUser = ({children}) => {
  const { isAuthenticated } = useAuthStore();



  if (isAuthenticated) {
    return <Navigate to="/klijent" />;
  }
  return children;
}


function App() {
  const {isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore();


  useEffect(() => {
    const checkUserAuth = async () => {
      await checkAuth();
    }
    checkUserAuth();

  }, [checkAuth]);



  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
          } />
        <Route path="/signup" element={
          <RedirectAuthenticatedUser>
            <SignUp />
          </RedirectAuthenticatedUser>
        } />
        <Route path="/klijent" element={<PshyRoute><Klijent /></PshyRoute>} />
        <Route path="/psiholog" element={<ProtectedRoute><Psiholog /></ProtectedRoute>} />
        <Route path="/psiholog/profil" element={<ProtectedRoute><Profil /></ProtectedRoute>} />
        <Route path="/klijent/profil" element={<ProtectedRoute><ProfilKlijent /></ProtectedRoute>} />
        <Route path="/psiholog/novi-klijent" element={<ProtectedRoute><KreirajKlijenta /></ProtectedRoute>} />
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
