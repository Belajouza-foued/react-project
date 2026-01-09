import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { FaSearch } from "react-icons/fa";
import logoFit from "../../pages/images/logo-2.jpg";
import translations from "../../translations";
import "../../pages/styles/style.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("language") || "fr");
  const navigate = useNavigate();

  const data = [
    { name: "Nutrition", link: "/nutrition" },
    { name: "Stories", link: "/stories" },
    { name: "Help", link: "/help" },
    { name: "Services", link: "/services" },
  ];

 
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

 
  const handleSearch = () => {
    const found = data.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    found ? navigate(found.link) : alert("Page non trouvée");
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 text-white phone">
              Phone: <Link to="#">+216 58 860 181</Link> | Email:
              <Link to="#"> foued.belajouza@gmail.com</Link>
            </div>

            <div className="col-md-6 text-end social-media">
              <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faDribbble} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light ftco-navbar-light">
        <div className="container">

          {/* LOGO */}
          <img src={logoFit} className="logo-fit" alt="logo" />

          <Link className="navbar-brand" to="/home">
            world<span>fitness <FontAwesomeIcon icon={faLeaf} /></span>
          </Link>

          {/* HAMBURGER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/home">{translations[lang].home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{translations[lang].about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nutrition">Nutrition</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stories">{translations[lang].facts}</Link>
              </li>
                            <li className="nav-item">
                <Link className="nav-link" to="/contact">{translations[lang].contact}</Link>
              </li>             
            </ul>

            {/* ACTIONS */}
            <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">

              <select
                className="form-select form-select-sm w-auto"
                value={lang}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>

              <div className="search-container">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>
                  <FaSearch />
                </button>
              </div>

                       </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
