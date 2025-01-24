import React, { useEffect, useState } from 'react';

import axios from 'axios';
import '../pages/styles/CreateProfile.css';
import { Link, useNavigate } from 'react-router-dom'; // Assurez-vous d'importer Link et useNavigate
function CreateProfile() {
    const [appointmentData, setAppointmentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate(); // Utiliser useNavigate pour la redirection
        // Fonction pour la déconnexion
        const logOut = () => {
            
            localStorage.removeItem('token'); // Supprimer le token du localStorage
            navigate('/'); // Rediriger vers la page de login
        };
    useEffect(() => {
        const fetchAppointmentData = async () => {
            const token = localStorage.getItem('token');
              // Si aucun token, rediriger vers la page de login
              if (!token) {
                navigate('/');
                return;
            }
            try {
               
                const response = await axios.get('http://localhost:5000/api/auth/createProfile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAppointmentData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/');
            } finally {
                setIsLoading(false);
            }
        };
     
        fetchAppointmentData();
    }, [navigate]);
    if (isLoading) {
        return <div className="text-center mt-5">Loading...</div>;
    }
    if (!appointmentData) {
        return null; // Retourner null pour éviter d'afficher le profil tant que la redirection n'a pas eu lieu
    }
     // Si userData est null après la tentative de récupération, on redirige vers la page de login
        return (
        //dash profile//
        <div className="container-fluid profile-container">
            <div className='row  d-flex flex-lg-row flex-column align-items-center justify-content-center'>
          
                      {/* Intégration du tableau de bord */}
                      <h1 className='text-center title-profile col-lg-12 mt-5 pt-2 mt'>Profile</h1>
            <div className=" col-lg-12 col-sm-12  d-flex justify-content-center ms-2 mb-5"> 
            
            <button className="btn btn-danger nav-item nav-log" onClick={logOut}>
    LogOut
</button>

      {/* Lien vers le tableau de bord */}
      <Link to="/dashboard">
        <button className="btn btn-primary btn-dashboard mt-2 ms-3">Dashboard</button>
      </Link>
    </div>
   
             
                    
                    <div className="col-12 col-lg-6 ps-3">
        <div className="bg-light  rounded  pt-3 text-center">
          <em className="description d-block mb-3">
            Hello everybody, you must believe<br /> everything is possible, don't give up.
          </em>
          <h5 className="title-form">firstName: {appointmentData.firstName}</h5>
          <p className="text-form">Lastname: {appointmentData.lastName}</p>
         
         
         
        </div>
      </div>
       
            
            </div>
        </div>
    );
}

export default CreateProfile;
