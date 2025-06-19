import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import image30 from './images/adidas.jpg';
import image40 from './images/atheletica.avif';
import image50 from './images/coach-1.jpg';
import image60 from './images/accurate-sit-ups-gym.jpg';
import AddAdmin from "./AddAdmin";
import '../pages/styles/Contact.css'
import nike from '../pages/images/nike.webp'
import hummel from '../pages/images/hummel.png'
import lotto from '../pages/images/lotto.png'
import newBalance from '../pages/images/new-balance.png'
import atheletica from '../pages/images/atheletica.avif'
import adidas from '../pages/images/adidas.jpg'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-sm-12">
            <div className="containter-fluid mt-5 text-start " style={{padding:"5%", opacity:"90%"}}>
                    <h4 className="text-center mx-auto ps-2" style={{ textAlign: "left", fontSize:"60px", color:"#f0f0f0" }}>
                      <Link className="pe-2" to="/" style={{textDecoration:"none", color:"#f0f0f0"}}></Link>Contactez-nous</h4>
                  

                </div>
            </div>
            <div className="col-lg-12 col-sm-12 mb-5">
             <div className="mt-5">
                        <AddAdmin /> {/* Affiche le composant ici */}
        </div>
        <div className="logo-contact mt-5">
            <img src={nike} className="nike" alt=""/>
            <img src={hummel} className="nike" alt=""/>
            <img src={adidas} className="nike" alt=""/>
            <img src={lotto} className="nike" alt=""/>
            <img src={newBalance} className="nike" alt=""/>
            <img src={atheletica} className="nike" alt=""/>
            
        </div>
            </div>

            <div className="col-lg-8 col-sm-12 mb-3 ps-5">
             
      <h1 className="text-left pb-2">Carte interactive :</h1>
      <iframe
      className="pb-3 mt-4"
        title="Google Maps"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1535222957637!2d10.600185575258116!3d35.845238920948034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b00157e66eb%3A0x8b4bca4156e550a8!2sKhezama%20Ouest!5e0!3m2!1sfr!2stn!4v1738170405813!5m2!1sfr!2stn"  style={{width:"100%", height:"400px",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
             </iframe>
             </div>
             <div className="col-lg-4 col-sm-12 mb-5 pe-5 pb-5 mt-4">
             <div className="map-contact mt-5" style={{ padding:"20%", opacity:"90%", borderRadius:"8px"}}>
                <h4 className="text-contact mt-5" >Besoin d'aide?</h4>
                <strong >+216 58 860 181</strong>
               <hr style={{  border:"2px solid"}}></hr>
                <p className="text-contact" >Adress : Avenue khezam sousse</p>
              </div>
             </div>
             <div className="col-12">
             <div className="test-carroussel">
              <div className="image-parent">
   <img src={image30} className="image-40" alt=""/>
<img src={image40} className="image1-40" alt=""/>
<img src={image50} className="image1-40" alt=""/>
<img src={image60} className="image1-40" alt=""/>  
              </div>
             </div>
             </div>
             
    </div>
    </div>
  );
};

export default Contact;
