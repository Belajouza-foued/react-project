import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../pages/styles/style.css'
// Import de l'icône spécifique
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import logoFit from '../../pages/images/logo-2.jpg'
import { faFacebook, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
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
	        	<li className="nav-item"><Link to="admin" className="nav-link">About</Link></li>
	        	<li className="nav-item"><Link to="read.html" className="nav-link">Coach</Link></li>
	        	<li className="nav-item"><Link to="pricing.html" className="nav-link">Pricing</Link></li>
	        	<li className="nav-item"><Link to="help" className="nav-link">Services</Link></li>
	          <li className="nav-item"><Link to="success-stories.html" className="nav-link">Stories</Link></li>
	          <li className="nav-item"><Link to="blog.html" className="nav-link">Blog</Link></li>
	          <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
	        </ul>
	      </div>
		 
	    </div>
	  </nav>
     
       
       
      <Outlet />
      </div>
  )
      }
      export default Navbar;