import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import '../pages/styles/CreateLogin.css';
import backgroundImage from './images/bg-fitness.jpg'
function CreateLogin() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();  // Initialize navigate

    const CreatehandleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/createLogin', {
                firstName,
                lastName
            });
            console.log(response.data);
            // Navigate to profile page on success
            navigate('/createProfile');

            // Optionally reload the page
            window.location.reload();

            localStorage.setItem('token', response.data.token); // Save JWT to local storage
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className='container mt-5 pt-5'style={{
            backgroundImage:`url(${backgroundImage})`,
            backgroundSize: 'cover', // Pour couvrir tout l'élément
            backgroundPosition: 'center', // Pour centrer l'image
            height: '600px' // Ajustez la hauteur selon vos besoins
          }}>
            <div className='row'>           
                <div className='col-lg-12  login-position '>
                  
                    <form className="col-lg-12 form-login pt-2" onSubmit={CreatehandleLogin}>
                    <h3 className="login-title mt-5 pt-5 ps-5">Login:</h3>
                        
                        <div className=' '>
                          <input
                                type="text"
                                placeholder='firstName'

                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='form-control position-user'style={{background:'none'}}
                            />
                        </div>
                        <div className="position-relative col-lg-12 pt-5 ">
                        <input
                    type="text"
                    placeholder='lastName '
                     value={lastName}
                    onChange={(e) => setLastName(e.target.value)}z
                    className='form-control 'style={{background:'none'}}                    
                />
                        </div>
                        <div className='row mt-3 mb-3'>
         <div className="col-lg-6 col-sm-12 pt-3">
         <Link to={'/register'} className='link-login text-start'>Create Account</Link></div>
         <div className='col-lg-6 col-sm-12 pt-3 text-end'>
        <Link to={'/forgot-password'} className='link-login'>Forgot password</Link>
    </div>
    </div>
   

                        <div className='col-lg-12 button-login pt-4'>
                        <button type="submit" className='btn 
                        btn-primary
                         form-control log-button'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateLogin;
