import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate

import '../pages/styles/Login.css';
import backImage from './images/fitness-2.jpg'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();  // Initialize navigate

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            });
            console.log(response.data);
            // Navigate to profile page on success
            navigate('/profile');

            // Optionally reload the page
            window.location.reload();

            localStorage.setItem('token', response.data.token); // Save JWT to local storage
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className='container mt-5' style={{
            backgroundImage:`url(${backImage})`,
            backgroundSize: 'cover', // Pour couvrir tout l'élément
            backgroundPosition: 'center', // Pour centrer l'image
            height: '600px' // Ajustez la hauteur selon vos besoins
          }}>
            <div className='row'>

               
            <div className="d-flex justify-content-center align-items-center vh-100 pt-5">
  <div className="col-lg-4 col-sm-12 login-position">
    <form className="form-login" onSubmit={handleLogin}>
      <h2 className="text-center title-login pt-2">Login:</h2>

      <div className="position-user col-12 pt-2 ms-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control design-login"
        />
      </div>

      <div className="position-relative col-12 pt-2 ms-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control design-login"
        />
      </div>

      <div className="form-check d-flex justify-content-between align-items-center col-12 mb-1">
        <div className="d-flex align-items-center ms-5 mt-1 pt-2">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
        </div>
        <Link to="/forgot-password" className="link-login pe-5 me-2">Forgot password?</Link>
      </div>

      <div className="col-12 pt-3 ms-4">
        <button type="submit" className="btn btn-primary form-control log-button">Login</button>
      </div>
    </form>
  </div>
</div>

            </div>
        </div>
    );
}

export default Login;
