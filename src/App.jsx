// App.jsx

// DEPENDENCIES
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

// PAGES
import Home from './Pages/Home';
import LoginDev from './Pages/LoginDev';
import Category from './Pages/Category';
import FourOFour from './Pages/FourOFour';
import About from './Pages/About';
import Subcategory from './Pages/Subcategory';
import FAQ from './Components/FAQ';

// COMPONENTS
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import UserDashboard from './Pages/UserDashboard';
import ProgressTracking from './Pages/ProgressTracking';
import MentorSignUp from './Pages/MentorSignUp';
import MenteeSignUp from './Pages/MenteeSignUp';
import UserDashNew from './Pages/UserDashNew';
import ProtectedRoute from './Components/ProtectedRoute';
import TrackProgress from './Pages/TrackProgress';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connections, setConnections] = useState([]);
  const [pendingConnections, setPendingConnections] = useState([]); // State for pending connections

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user && token) {
      // Fetch connections
      fetch(
        `${import.meta.env.VITE_BASE_URL}/users/${
          user.id
        }/connections`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setConnections(data);
          // Assuming the API returns an array of connections, filter for pending ones
          const pending = data.filter(
            (connection) => connection.status === 'pending'
          );
          setPendingConnections(pending); // Set pending connections
        })
        .catch((err) =>
          console.error('Error fetching connections:', err)
        );
    }
  }, [user, token]);

  // Log pending connections length whenever it changes
  useEffect(() => {
  }, [pendingConnections]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
      <Router>
        <NavBar
          user={user}
          setUser={setUser}
          setToken={setToken}
          connections={connections}
          pendingConnections={pendingConnections} // Pass the actual array of pending connections
        />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/mentor-signup'
              element={
                <MentorSignUp setUser={setUser} setToken={setToken} />
              }
            />
            <Route
              path='/mentee-signup'
              element={
                <MenteeSignUp setUser={setUser} setToken={setToken} />
              }
            />
            <Route
              path='/login'
              element={
                <LoginDev setUser={setUser} setToken={setToken} />
              }
            />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute
                  element={UserDashNew}
                  isAuthenticated={!!user && !!token}
                  user={user}
                  token={token}
                  setUser={setUser}
                  connections={connections}
                />
              }
            />
            <Route
              path='/progress/:connection_id'
              element={
                <ProtectedRoute
                  element={TrackProgress}
                  isAuthenticated={!!user && !!token}
                  user={user}
                  token={token}
                  setUser={setUser}
                />
              }
            />
            <Route
              path='/progress/:skill_name'
              element={<TrackProgress />}
            />
            <Route path='/about' element={<About />} />
            <Route
              path='/categories/:category_id'
              element={<Category />}
            />
            <Route
              path='/categories/:category_id/subcategories/:subcategory_id'
              element={<Subcategory />}
            />
            <Route
              path='/categories/:category_id'
              element={<Category />}
            />
            <Route path='*' element={<FourOFour />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
