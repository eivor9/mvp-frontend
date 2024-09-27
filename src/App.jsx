// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// PAGES
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Category from "./Pages/Category";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
   <div className="App">
    <Router>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* Categories Routes */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main> 
      <Footer/>
    </Router>
   </div>
  )
}

export default App
