// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

// PAGES
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LoginDev from "./Pages/LoginDev";
import Profile from "./Pages/Profile";
import Category from "./Pages/Category";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";
import Subcategory from "./Pages/Subcategory";
import FAQ from "./Components/FAQ";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import UserDashboard from "./Pages/UserDashboard";
import ProgressTracking from "./Pages/ProgressTracking";
import MentorSignUp from "./Pages/MentorSignUp";
import MenteeSignUp from "./Pages/MenteeSignUp";
import UserDashNew from "./Pages/UserDashNew";
import ProtectedRoute from "./Components/ProtectedRoute";
import TrackProgress from "./Pages/TrackProgress";

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
    }
    setLoading(false);
  }, [setUser, setToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <NavBar user={user} setUser={setUser} setToken={setToken} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/mentor-signup" element={<MentorSignUp setUser={setUser} setToken={setToken} />} />
            <Route path="/mentee-signup" element={<MenteeSignUp setUser={setUser} setToken={setToken} />} />
            <Route path="/login" element={<LoginDev setUser={setUser} setToken={setToken} />} />
            {/* <Route path="/dashboard" element={<UserDashNew user={user} token={token} setToken={setToken} setUser={setUser} />} /> */}
            <Route path="/dashboard" element={
                <ProtectedRoute 
                  element={UserDashNew}
                  isAuthenticated={!!user && !!token}
                  user={user}
                  token={token}
                />
              } 
            />

            <Route path="/progress/:skill_name" element={<TrackProgress/>} />


            <Route path="/signup" element={<SignUp setUser={setUser} setToken={setToken} />} />
            <Route path="/profile/:user_id" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories/:category_id" element={<Category />} />
            <Route path="/categories/:category_id/subcategories/:subcategory_id" element={<Subcategory />} />
            <Route path="/categories/:category_id" element={<Category />} />
            
            <Route path="*" element={<FourOFour />} />
            {/* <Route path="/progress/:user_id/:connection_id" element={<ProgressTracking />} /> */}
            <Route path="*" element={<FourOFour />} />
            <Route path= "/faq" element={<FAQ />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
