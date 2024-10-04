// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Category from "./Pages/Category";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import UserDashboard from "./Pages/UserDashboard";
import ProgressTracking from "./Pages/ProgressTracking";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            {/* Categories Routes */}
          <Route path="/categories/:category_id" element={<Category />} />
            <Route path="/user-dashboard/:id" element={<UserDashboard />} />
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
