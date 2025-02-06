import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AddAdmin from "./AddAdmin";
import '../pages/styles/Contact.css'
import nike from '../pages/images/nike.webp'
import hummel from '../pages/images/hummel.png'
import lotto from '../pages/images/lotto.png'
import newBalance from '../pages/images/new-balance.png'
import atheletica from '../pages/images/atheletica.avif'
import adidas from '../pages/images/adidas.jpg'
const Contact = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-sm-12">
            <div className="containter-fluid mt-5 text-start" style={{padding:"5%", backgroundColor:" #1089ff", opacity:"90%"}}>
                    <h1 className="title-contact" style={{ textAlign: "left", fontSize:"60px", color:"white" }}>Contactez-nous</h1>
                    <p className="text-contact" style={{ color: "white" }}>Contactez nous</p>

                </div>
            </div>
            <div className="col-lg-8 col-sm-12 mb-5">
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

            <div className="col-lg-4 col-sm-12 mt-5">
              <div className="map-contact mt-5" style={{backgroundColor:" #1089ff", padding:"5%", opacity:"90%", borderRadius:"8px"}}>
                <h3 className="text-contact" style={{ color: "white" }}>Besoin d'aide?</h3>
                <strong style={{ color: "white" }}>+216 58 860 181</strong>
               <hr style={{ color: "white", border:"2px solid"}}></hr>
                <p className="text-contact" style={{ color: "white" }}>Adress : Avenue khezam sousse</p>
              </div>
      <h2>Carte interactive</h2>
      <iframe
        title="Google Maps"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1535222957637!2d10.600185575258116!3d35.845238920948034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b00157e66eb%3A0x8b4bca4156e550a8!2sKhezama%20Ouest!5e0!3m2!1sfr!2stn!4v1738170405813!5m2!1sfr!2stn"  style={{width:"100%", height:"400px",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
             </iframe>
             </div>
             
    </div>
    </div>
  );
};

export default Contact;
