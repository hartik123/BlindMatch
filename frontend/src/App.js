import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NavbarComponent from "./components/NavbarComponent";
import LoadingBar from "react-top-loading-bar";
import FooterComponent from "./components/FooterComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { useSelector } from "react-redux";
import Loaders from "./components/Loaders";
import ChatBotComponent from "./components/ChatBotComponent";

function App() {
  const [progress, setProgress] = useState(0);
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      <Router>
        {loading && <LoadingBar height={3} color="#A5074D" progress={progress} />}
        <NavbarComponent setProgress={setProgress}/>
        
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage setProgress={setProgress} />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage setProgress={setProgress} />
              </PublicRoute>
            }
          />
          <Route
            path="/forgotPassword"
            element={
              <PublicRoute>
                <ForgotPasswordPage setProgress={setProgress} />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            exact
            element={
              <PublicRoute>
                <ProfilePage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage setProgress={setProgress} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <FooterComponent />
      </Router>
      <ChatBotComponent />
    </div>
  );
}

export default App;
