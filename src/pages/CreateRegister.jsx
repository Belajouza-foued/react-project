import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "../pages/styles/CreateRegister.css";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
function CreateRegister() {
    const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
       const [services, setServices] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
       const navigate = useNavigate();  // Initialize navigate
       const createHandleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            firstName,
            lastName,
            number,
            services,
            date,
            time,
        };
    
        try {
            const response = await axios.post('http://localhost:5000/api/auth/createRegister', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
    
            // Rediriger après succès
            navigate('/createLogin');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement :', error);
        }
    };
    

    return (
        <>
<div className='container '>
<div className='row'>
    
   
    <div className='col-lg-12 col-sm-12 text-center bg-primary-subtle ps-5 pe-5 pb-5'>
             
        <form onSubmit={createHandleSubmit} className='row position-form mt-5'>
            
        <h2 className='line pt-4'>Register</h2>
            <div className='col-lg-4 col-sm-12 pt-3'>
                <input
                    type="text"
                    placeholder="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='form-control mt-3'
                />
                  </div>
                  <div className='col-lg-4 col-sm-12 pt-3'>
                  <input
                    type="lastName"
                    placeholder="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
                  <div className='col-lg-4 col-sm-12 pt-3'>
    
    <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className='form-control mt-3'
                />
                 </div>
                   <div className='col-lg-4 col-sm-12 pt-3'>
                <input
                    type="services"
                    placeholder="services"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                     className='form-control mt-3'
                />
               </div>
                   <div className='col-lg-4 col-sm-12 pt-3'>
                  <input
                    type="date"
                    placeholder="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='form-control mt-3'
                />
                </div>
                <div className='col-lg-4 col-sm-12 pt-3'>
                  <input
                    type="time"
                    placeholder="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className='form-control mt-3'
                />
                </div>
   
    <div className='col-lg-12 col-sm-12 text-center push-register pt-5 '>
    <button type="submit" className=' btn btn-primary push'>Register</button>
    </div>
    </form>
    </div>

    </div>
</div>

 
       

        
        </>
       



    );
}


export default CreateRegister;