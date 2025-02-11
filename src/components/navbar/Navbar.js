import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../pages/styles/style.css'
// Import de l'icône spécifique
import { faLeaf, } from '@fortawesome/free-solid-svg-icons';
import logoFit from '../../pages/images/logo-2.jpg'
import { faFacebook, faTwitter, faInstagram, faDribbble,} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import translations from "../../translations";




const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("language") || "fr");
  const navigate = useNavigate();   const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Liste des mots-clés et leurs liens
  const data = [
    { name: "Nutrition", link: "/nutrition" },
    { name: "stories", link: "/stories" },
    { name: "Help", link: "/help" },
   
  ];

  // Filtrer les suggestions en fonction de l'entrée utilisateur
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /*add language frensh an eng*/
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang); // Sauvegarder la langue
  };
  /*add language frensh an eng*/
  const handleSearch = () => {
    const foundItem = data.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    
    if (foundItem) {
      navigate(foundItem.link); // Redirige vers la page correspondante
    } else {
      alert("Produit non trouvé !");
    }
  };
  return (
<div className="wrap">
			<div className="container">
				<div className="row justify-content-between">
						<div className="col d-flex align-items-center">
							<p className="mb-0 phone"><span className="mailus">Phone no:</span> <Link to="#">+216 58 860 181</Link> or <span className="mailus">email us:</span> <Link to="#">foued.belajouza@gmail.com</Link></p>
						</div>
						<div className="col d-flex justify-content-end">
							<div className="social-media">
				    		<p className="mb-0 d-flex">
				    			<Link to="https://www.facebook.com" className="d-flex align-items-center justify-content-center" style={{color:'white'}}><FontAwesomeIcon icon={faFacebook}/></Link>
				    			<Link to="https://www.twitter.com" className="d-flex align-items-center justify-content-center" style={{color:'white'}}><FontAwesomeIcon icon={faTwitter}  /></Link>
				    			<Link to="https://www.instagram.com" className="d-flex align-items-center justify-content-center" style={{color:'white'}}><FontAwesomeIcon icon={faInstagram} /></Link>
				    			<Link to="#" className="d-flex align-items-center justify-content-center" style={{color:'white'}}><FontAwesomeIcon icon={faDribbble} /></Link>
				    		</p>
			        </div>
						</div>
				</div>
			</div>
		
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
			<div className='logo-img pe-5'>
		<img className='logo-fit me-5 mt-3' src={logoFit} alt='' /></div>
		<Link className="navbar-brand" to="index.html">
  <span className="world-text">world</span>
  <span>fitness<FontAwesomeIcon icon={faLeaf}/></span>
</Link>

	      <div className="collapse navbar-collapse ms-1 ps-5" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
          <li className="nav-item">  <p className="pt-4 mt-2 pe-4 about-p" style={{ fontSize: "13px",fontWeight:"400" }}>
    <Link to="/home" style={{ textDecoration: "none", color:"inherit" }}>
      {translations[lang].home}
    </Link>
  </p></li>
	        		        	<li className="nav-item">  <p className="pt-4 mt-2 about-p" style={{ fontSize: "13px",fontWeight:"400" }}>
    <Link to="/about" style={{ textDecoration: "none", color:"inherit" }}>
      {translations[lang].about}
    </Link>
  </p></li>
            <div className="coach-dropdown pt-4 mt-2">
      <span className="coach-title ms-3 pb-1" style={{fontSize:"13px", opacity:"60%", color:"inherit", fontWeight:"400"}}>Coach</span>
      <div className="dropdown-content">
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/help">Help</Link>
        <Link to="/services">Services</Link>
      </div>
    </div>
	        	<li className="nav-item"><Link to="/help" className="nav-link">Services</Link></li>
	          <li className="nav-item"><p className='mt-4 pt-2 about-p ms-1 mt-2' style={{fontSize:"13px"}}>
              <Link to="/stories" style={{textDecorationLine:"none", color:"inherit"}}>{translations[lang].facts}</Link></p></li>
	          <li className="nav-item"><p className="mt-4 pt-2 ps-4 about-p"style={{fontSize:"13px"}}><Link to="/contact" style={{textDecorationLine:"none", color:"inherit"}}>{translations[lang].contact}</Link></p></li>
	        </ul>
	      </div>
     
        {/*select language fren and eng*/}
       
        <div>
      
      

      <select onChange={(e) => changeLanguage(e.target.value)} value={lang} className='form-check check-language' style={{padding:"5px"}}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
     {/*select language fren and eng*/}
      		 
	    </div>
   <div class="darkmode">
      <button onClick={toggleDarkMode} className="btn btn-warning" style={{ padding: "5px", margin: "10px",}}>
      <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
    </button>
    </div>
	    <div className="search-container pe-5">
      <div className="search-box">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* Affichage des suggestions */}
      {searchTerm && (
        <ul className="search-results">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li key={index} onClick={() => navigate(item.link)}>
                {item.name}
              </li>
            ))
          ) : (
            <li>Aucun résultat trouvé</li>
          )}
        </ul>
      )}
    </div>
	  </nav>
     
       
       
      <Outlet />
      </div>
  )
      }
      export default Navbar;