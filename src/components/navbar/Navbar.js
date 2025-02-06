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




const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
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

	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item active"><Link to="/home" className="nav-link">Home</Link></li>
	        	<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <div className="coach-dropdown pt-4 mt-2">
      <span className="coach-title" style={{fontSize:"13px", opacity:"60%"}}>Coach</span>
      <div className="dropdown-content">
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/help">Help</Link>
        <Link to="/services">Services</Link>
      </div>
    </div>
	        	<li className="nav-item"><Link to="/help" className="nav-link">Services</Link></li>
	          <li className="nav-item"><Link to="/stories" className="nav-link">Facts</Link></li>
	          <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
	          <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
	        </ul>
	      </div>
        <h1>fofo</h1>
        {/*link dropdowwn*/}
      
		 
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