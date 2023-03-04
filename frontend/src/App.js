import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { useSelector } from "react-redux";
import Loaders from "./components/Loaders";
import './stylesheets/alignments.css';
import './stylesheets/chat.css';
import './stylesheets/custom-components.css';
import './stylesheets/form-elements.css';
import './stylesheets/layout.css';
import './stylesheets/textelements.css';
import './stylesheets/theme.css';

function App() {
  const {loading} = useSelector(state=>state.loaders);
  return (
    <div>
      <Router>
        {loading && <div className="text-center"><Loaders/></div>}
        <NavbarComponent />
        <Routes>
          <Route path="/" exact element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
          <Route path="/forgotPassword" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
