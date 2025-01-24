import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom';
import '../../pages/styles/Footer.css'

// Import de l'icône spécifique

import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
return (
<>
<footer className="footer bg-primary">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10 col-lg-6">
						<div className="subscribe">
							<form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                  <input type="submit" value="Subscribe" className="form-control submit px-3"/>
                </div>
              </form>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-5">
						<div className="row">
							<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
								<h2 className="footer-heading"><Link to="#" className="logo">World<span>Fitness</span></Link></h2>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
								<Link to="#">read more <span className="ion-ios-arrow-round-forward"></span></Link>
															</div>
				
						</div>
					</div>
					<div className="col-md-8 col-lg-7">
						<div className="row">
							<div className="col-md-3 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">Services</h2>
								<ul className="list-unstyled">
		              <li><Link to="#" className="py-1 d-block">Balance Body</Link></li>
		              <li><Link to="#" className="py-1 d-block">Physical Activity</Link></li>
		              <li><Link to="#" className="py-1 d-block">Fitness Program</Link></li>
		              <li><Link to="#" className="py-1 d-block">Healthy Food</Link></li>
		            </ul>
							</div>
							<div className="col-md-3 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">About</h2>
								<ul className="list-unstyled">
		              <li><Link to="#" className="py-1 d-block">Staff</Link></li>
		              <li><Link to="#" className="py-1 d-block">Team</Link></li>
		              <li><Link to="#" className="py-1 d-block">Careers</Link></li>
		              <li><Link to="#" className="py-1 d-block">Blog</Link></li>
		            </ul>
							</div>
							<div className="col-md-3 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">Resources</h2>
								<ul className="list-unstyled">
		              <li><Link to="#" className="py-1 d-block">Security</Link></li>
		              <li><Link to="#" className="py-1 d-block">Global</Link></li>
		              <li><Link to="#" className="py-1 d-block">Charts</Link></li>
		              <li><Link to="#" className="py-1 d-block">Privacy</Link></li>
		            </ul>
							</div>
							<div className="col-md-3 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">Social</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} >
  <li>
    <Link to="https://www.facebook.com/ta-page-facebook" className="py-1 d-block ps-2">
      <FontAwesomeIcon icon={faFacebook} />
    </Link>
  </li>
  <li>
    <Link to="https://www.twitter.com" className="py-1 d-block ps-2">
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
  </li>
  <li>
    <Link to="https://www.instagram.com" className="py-1 d-block ps-2">
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
  </li>
  <li>
    <Link to="https://www.google.com" className="py-1 d-block ps-2">
      <FontAwesomeIcon icon={faGoogle} />
    </Link>
  </li>
</ul>

							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">
          <div className="col-md-6 col-lg-8">

          
          </div>
          <div className="col-md-6 col-lg-4 text-md-right">
          	<p className="mb-0 list-unstyled">
          		<Link className="mr-md-3" to="#">Terms</Link>
          		<Link className="mr-md-3" to="#">Privacy</Link>
          		<Link className="mr-md-3" to="#">Compliances</Link>
          	</p>
          </div>
        </div>
			</div>
      
		</footer>
        <Outlet/>
</>

)

}
export default Footer;