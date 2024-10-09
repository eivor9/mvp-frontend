// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

// PAGES
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/LoginDev";
import Profile from "./Pages/Profile";
import Category from "./Pages/Category";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";
import Subcategory from "./Pages/Subcategory";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import UserDashboard from "./Pages/UserDashboard";
import ProgressTracking from "./Pages/ProgressTracking";

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)

  return (
    <div className="App">
      <Router>
        <NavBar user={user} setUser={setUser} setToken={setToken} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp setUser={setUser} setToken={setToken} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            {/* Categories Routes */}
            <Route path="/categories/:category_id" element={<Category />} />
            <Route path="/categories/:category_id/subcategories/:subcategory_id" element={<Subcategory />} />
            <Route path="/categories/:category_id" element={<Category />} />
            <Route path="/user-dashboard/:id" element={<UserDashboard />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/progress/:user_id/:connection_id" element={<ProgressTracking />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
