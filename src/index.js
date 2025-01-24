import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Help from './pages/help'
import Nutrition from './pages/Nutrition';
import Admin from './pages/Admin';
import AddAdmin from './pages/AddAdmin';
import EditAdmin from './pages/EditAdmin';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import CreateLogin from './pages/CreateLogin';
import CreateRegister from './pages/CreateRegister';
import CreateProfile from './pages/CreateProfile';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import Family from './pages/Family';
import Stories from './pages/Stories';
import AddGraphic from './pages/AddGraphic';
import Graphic from './pages/Graphic'






const App = () => {
  const location = useLocation();
  const hideNavbarFooter = ["/admin", "/addAdmin", "/login", "/profile", "/register","/userDashboard", 
    "/createRegister", "/createLogin", "/createProfile", "/sideBar", "/dashboard","/family","/graphic","/addGraphic"].some(path => location.pathname.startsWith(path));

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="blog" element={<Blog />} />
        <Route path="help" element={<Help/>} />
        
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
           <Route path="sideBar" element={<SideBar />} />
           <Route path="family" element={<Family />} />
        <Route path="createRegister" element={<CreateRegister />} />
        <Route path="createLogin" element={<CreateLogin />} />
        <Route path="createProfile" element={<CreateProfile />} />
        <Route path="addAdmin" element={<AddAdmin />} />
        <Route path="addGraphic" element={<AddGraphic />} />
        <Route path="graphic" element={<Graphic />} />
        <Route path="stories" element={<Stories />} />
        <Route path="/admin/:id" element={<EditAdmin />} />
       
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
