
import '../pages/styles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import image1 from '../pages/images/bg_1.jpg';
import image2 from '../pages/images/bg_2.jpg';
import coach from '../pages/images/coach-1.jpg'
import coach1 from '../pages/images/coach-1.jpg'
import staff10 from '../pages/images/dumbbell-ray.svg'
import staff7 from '../assets/icons/data.png'
import staff8 from '../assets/icons/loyalty-program.png'
import staff9 from '../assets/icons/meal.png'
import React, { useState, useEffect } from "react";
import persone3 from '../pages/images/person-3.jpg'
import CarouselPerson from '../components/CarouselPerson';

const Home = () => {
            const [isExpanded, setIsExpanded] = useState(false);
        const [isExpandedNutrition, setIsExpandedNutrition] = useState(false);
        const [isExpandedDietetique, setIsExpandedDietetique] = useState(false);
        const [displayText, setDisplayText] = useState("");
        const [index, setIndex] = useState(0);
        
        
        const [isVisible, setIsVisible] = useState(false);
               const text = "Bienvenue sur WorldFitness !"; // ✅ Définition du texte
        const speed = 100; // ✅ Vitesse de l'effet d'écriture

        const toggleText = () => {
          setIsExpanded(!isExpanded);
        };
        const toggleNutrition = () => {
          setIsExpandedNutrition(!isExpandedNutrition);
        };
        const toggleDietetique = () => {
          setIsExpandedDietetique(!isExpandedDietetique);
        };
        useEffect(() => {
          if (index < text.length) {
            const timeout = setTimeout(() => {
              setDisplayText(text.substring(0, index + 1));
              setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
          }
        }, [index, text, speed]);
        useEffect(() => {
          const handleScroll = () => {
            const position = window.scrollY;
            if (position > 100) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
     
  return (
    <>
   
  <div className='container-fluid bg-light-subtle mt-5'>
 <div className="carousel-header">
 
  <div className='col-lg-12'>
    <div className='d-flex justify-content-center  pt-3 mb-3'>
   <h2 className='tap-text'style={{color:"#1089ff"}}>{displayText}</h2> {/* ✅ Affichage progressif du texte */}
 </div>
       <div id="carouselId" className="carousel slide pt-sm-1" data-bs-ride="carousel">
      <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
  <img src={image2} className="img-fluid" alt="pour femme enceinte"/>
     <div className="carousel-caption">
           <div className="text-center p-4">
   <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Welcome to wordFitness</h4>
                              
       <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Fitness pour femme enceinte et debutante</h1>
         <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp simple-p" data-wow-delay="0.5s">Déverrouillez votre potentiel grâce à une bonne nutrition.Transformez votre santé en changeant vos habitudes, 
                </p>
                 <div className='button-res-1'>
       <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-6 wow fadeInUp" data-wow-delay="0.7s"  to="https://www.mega-gear.net/fr/blog/231-programme-femmes-debutant-musculation">More Details</Link>
       </div>
             </div>
            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image1} className="img-fluid" alt="pour femme"/>
                        <div className="carousel-caption">
                            <div className="text-center p-4">
                                 <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Programe wordFitness</h4>
                       <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Programe musculation pour femmes enceintes</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp simple-p" data-wow-delay="0.5s">Déverrouillez votre potentiel grâce à une bonne nutrition.Brûler,sécher
                                </p>
                                <div className='button-res-1'>
                           <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-6 wow fadeInUp " data-wow-delay="0.7s" to="https://www.mega-gear.net/fr/blog/category/4-programmes-de-musculation">More Details</Link>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-icon'>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon wow fadeInLeft bg bg-info" data-wow-delay="0.2s" aria-hidden="false"></span>
                    <span className="visually-hidden-focusable">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon wow fadeInRight bg bg-info" data-wow-delay="0.2s" aria-hidden="false"></span>
                    <span className="visually-hidden-focusable">Next</span>
                </button>
                </div>
            </div>
            </div>
              {/*scroll*/}
              </div>
      
       
        <div className='col-lg-12 col-sm-12 pt-5'>
          <div className='program-hiden'>
      <h2 className={isVisible ? "visible" : "hidden"}>Our program and plans !</h2>
      <style>{`
        .hidden { opacity: 0; transform: translateY(20px); transition: all 0.5s; }
        .visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
          </div>
        <section className="ftco-section ftco-services ">
     
    	<div className="container mt-5 container-pro">
        <div className='col-lg-12 col-sm-12'>
    		<div className="row">
        
				<div className="col-md-4 col-sm-12 d-flex services align-self-stretch px-4 ftco-animate">
					<div className="d-block services-wrap text-center">
					  <div className="img-1b ms-4"></div>
					  <div className="media-body p-2">
						<Link className="mt-5 Link-pro" style={{textDecoration:"none", fontSize:'20px'}} to="https://www.mega-gear.net/fr/blog/231-programme-femmes-debutant-musculation">Programme pour débutantes</Link>
									         <div>
      <p className='text-pro'>
      Un programme sur mesure pour aider les débutantes à démarrer leur parcours de fitness en toute confiance.</p>
        {isExpanded && ( <p id="more-text" className='text-pro'> Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
       </p> )}
      <button className="btn-pro btn btn-primary btn-outline-primary"id="read-more-btn"  onClick={toggleText}  >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
                        
					  </div>
					</div>      
				  </div>
				  
          <div className="col-md-4  col-sm-12 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block services-wrap text-center">
              <div className="img-2b ms-3"></div>
              <div className="media-body p-2">
                <Link to="/nutrition Link-pro" style={{textDecoration:"none", fontSize:'20px'}} className="">Plan nutritionel</Link>
			 <p className='text-pro'>Des plans nutritionnels équilibrés pour atteindre vos objectifs santé et bien-être.Avec alimentatione bien équilibré</p>
        {isExpandedNutrition && ( <p id='more-text-nutrition' className='text-pro'> Un plan nutritionnel bien conçu est essentiel pour atteindre vos objectifs de santé et de bien-être.
        Que vous cherchiez à perdre du poids, à gagner en muscle ou simplement à améliorer votre alimentation, un plan personnalisé vous aidera à suivre une alimentation équilibrée et adaptée à vos besoins spécifiques.</p>
        )}
			
			                                
  <button  className="btn-pro  btn btn-primary btn-outline-primary mt-2" id="read-more-btn-nutrition"  onClick={toggleNutrition}>
  {isExpandedNutrition ? 'Read less' : 'Read more'}
  </button>

              </div>
            </div>    
          </div>
          <div className="col-md-4 col-sm-12 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block services-wrap text-center">
              <div className="img-b3 ms-3"></div>
              <div className="media-body mt-3 ">
            <Link to="https://www.mega-gear.net/fr/blog/category/6-exercices-musculation" style={{textDecoration:"none", fontSize:'20px'}}className="mb-1 Link-pro">Programe haut-niveau</Link>
                <p className='text-pro'> Nous évoquerons les exercices de base pour développer la masse musculaire qui ciblent chaque muscle en particulier.</p>
				
        
					{isExpandedDietetique && (
            <div id="more-text-dietetique" className='more-text-dietetique text-pro'>
          
					<p>Notre programme diététique inclut :</p>
					<ul>
					  <li><strong>Des repas riches en protéines</strong> pour favoriser la construction musculaire et la récupération.</li>
					  <li><strong>Des glucides complexes</strong> pour maintenir l'énergie tout au long de la journée.</li>
					  <li><strong>Des graisses saines</strong> pour la fonction cellulaire et l’absorption des vitamines.</li>
					  <li><strong>Des fibres</strong> pour améliorer la digestion et réguler le transit intestinal.</li>
					  <li><strong>Des micronutriments</strong> pour renforcer le système immunitaire.</li>
					</ul></div>
          )}
               
                
  <button  className="btn-pro btn btn-primary btn-outline-primary" id="read-more-btn-dietetique"  onClick={toggleDietetique}>
  {isExpanded ? 'Read less' : 'Read more'}
  </button>

              </div>
            </div>      
          </div>

        </div>
        </div>
    	</div>
    
    </section>
    
   
    <div className="d-flex justify-content-center align-items-center min-vh-100">
  <div className="card mb-3 text-center form-position w-100" style={{ maxWidth: '1000px' }}>
    <div className="row g-0">
      <div className="col-lg-4 col-sm-12">
        <img
          src={coach}
          alt="Trendy Pants and Shoes"
          className="img-fluid rounded-start coach-pro"
        />
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="card-body pt-5">
          <h5 className="card-title title-1">Welcome to Healthcare</h5>
          <p className="card-text">
          Prendre soin de sa santé de manière naturelle est l une des meilleures façons 
          d améliorer son bien-être global.
          </p>
          <p className="card-p">
          En adoptant des habitudes saines, comme une alimentation équilibrée, une activité physique régulière et une bonne 
          gestion du stress, vous pouvez renforcer votre corps et votre esprit.
          </p>
          <p className="card-p">
          La santé naturelle se concentre sur des approches douces et préventives, privilégiant les remèdes issus de la nature et des changements de mode de vie pour favoriser un équilibre durable. 
          Cela vous permet de maintenir votre vitalité tout en respectant le rythme de votre corps.
          </p>
          
            <img className='coach-logo mt-3' src={coach1} alt=''/>
           <div className='text-logo pt-1 mt-3'>
            <p className="ps-3  foued custom pt-2">Foued belajouza</p>
            <p className="ps-3 pb-2 custom" >rihab khouaja</p>
           </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
<section className="ftco-section ftco-no-pt ftco-no-pb">
			<div className="container-fluid px-md-0">
				<div className="row no-gutters">
					<div className="col-md-3 col-sm-12 d-flex align-items-stretch">
						<div className="consultation w-100 text-center px-4 px-md-5">
							<h3 className="mb-4">Healthcare Services</h3>
							<p className='river'>A small river named Duden flows by their place and supplies</p>
							<Link to ="services"className="btn-custom">See Services</Link>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 d-flex align-items-stretch">
						<div className="consultation consul w-100 px-4 px-md-5">
							<div className="text-center">
								<h3 className="mb-4">Free Consultation</h3>
							</div>
							<form className="appointment-form">
								<div className="row">
									<div className="col-md-12 col-sm-12 col-lg-6 col-xl-4">
										<div className="form-group">
				    					<input type="text" className="form-control" placeholder="First Name"/>
				    				</div>
									</div>
									<div className="col-md-12 col-lg-6 col-xl-4 col-sm-12 ">
										<div className="form-group">
				    					<input type="text" className="form-control" placeholder="Last Name"/>
				    				</div>
									</div>
									<div className="col-md-12 col-sm-12 col-lg-6 col-xl-4">
										<div className="form-group">
				    					<div className="form-field">
		          					<div className="select-wrap">
		                      <div className="icon"><span className="fa fa-chevron-down"></span></div>
		                      <select name="" id="" className="form-control">
		                      	<option value="">Services</option>
		                        <option value="">Services 1</option>
		                        <option value="">Services 2</option>
		                      </select>
		                    </div>
				              </div>
				    				</div>
									</div>
									<div className="col-md-12 col-lg-6 col-xl-4 col-sm-12 ">
										<div className="form-group">
				    					<div className="input-wrap">
				            		<div className="icon"><span  className="ion-md-calendar"></span></div>
				            		<input type="text"  className="form-control appointment_date" placeholder="Date"/>
			            		</div>
				    				</div>
									</div>
									<div className="col-md-12 col-lg-6 col-xl-4 col-sm-12 ">
										<div className="form-group">
				    					<div className="input-wrap">
				            		<div className="icon"><span  className="ion-ios-clock"></span></div>
				            		<input type="text" className="form-control appointment_time" placeholder="Time"/>
			            		</div>
				    				</div>
									</div>
									<div className="col-md-12 col-lg-6 col-xl-4 col-sm-12 ">
										<div className="form-group">
				              <input type="submit" value="Appointment" className="btn btn-white py-2 px-4"/>
				            </div>
									</div>
								</div>
		    			</form>
		    	  </div>
					</div>
					<div className="col-md-3 d-flex align-items-stretch col-sm-12 ">
						<div className="consultation w-100 text-center px-4 px-md-5">
							<h3 className="mb-4">Find A Health Expert</h3>
							<p>A small river named Duden flows by their place and supplies</p>
							<Link to ="#" className="btn-custom">Meet our health coach</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    <div className='container'>
    <div className=" col-lg-12 col-sm-12 pt-5">
  <h1 className="feedback">FeedBack Clients</h1>

{/*card feedback*/}
<div className='d-flex justify-content-center align-items-center min-vh-100'>
<div
  id="carouselMultiItemExample"
   className="carousel slide carousel-dark text-center"
  data-bs-ride="carousel"
>

  <div className="d-flex justify-content-center button-icon-res">
    <button 
      className="carousel-control-prev position-relative"
      type="button"
      data-bs-target="#carouselMultiItemExample"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button 
      className="carousel-control-next position-relative"
      type="button"
      data-bs-target="#carouselMultiItemExample"
      data-bs-slide="next"
    >
      <span  className="carousel-control-next-icon" aria-hidden="true"></span>
      <span  className="visually-hidden">Next</span>
    </button>
  </div>
 
  <div  className="carousel-res py-4">   
    <CarouselPerson className="res-carousel"/>  

  </div>

</div>
</div>
</div>
</div>

<div className='container max-container'>
  <div className='row g-4'>
  <div className='col-lg-3 col-sm-12'>
<div className="card text-center modified">
  <div className="bg-image hover-overlay ripple pt-5" data-mdb-ripple-color="light">
  <img  src={staff10}   className="programe-icon" alt="Fissure in Sandstone"
  />    
  </div>
   <div className="card-body card-body-1">
    <h5 className="card-title card-title-1">Sceances d'entrainement</h5>
    <p className="card-text">
    Un entraînement rapide et efficace qui combine 
    des exercices de haute intensité pour des résultats optimaux en un temps record.
    </p>


  </div>
  <div className="card-footer"><Link to ="/register" className='link-carde'>Réservez votre séance</Link></div>
</div>
</div>

<div className='col-lg-3 col-sm-12'>
<div className="card text-center modified">
  <div className="bg-image hover-overlay ripple pt-5" data-mdb-ripple-color="light">
  <img  src={staff7}   className="programe-icon " alt="Fissure in Sandstone"
              />
  
  </div>
 
  <div className="card-body">
    <h5 className="card-title">Des Résultats Mesurables</h5>
    <p className="card-text">
    Gagnez en endurance, renforcez vos muscles et améliorez 7
    votre posture grâce à notre programme d'entraînement sur mesure.    </p>


  </div>
  <div className="card-footer"><Link to ="https://virtuagym.com/video-on-demand/category/185/" className='link-carde'>Nos temoigages</Link></div>
</div>
</div>
<div className='col-lg-3 col-sm-12'>
<div className="card text-center modified">
  <div className="bg-image hover-overlay ripple pt-5" data-mdb-ripple-color="light">
  <img  src={staff8}   className="programe-icon " alt="Fissure in Sandstone"
              />
      </div>
   <div className="card-body">
    <h5 className="card-title carde">Bien-Être et Équilibre</h5>
    <p className="card-text">
    Retrouvez l’équilibre entre le corps et l’esprit grâce à des séances combinant relaxation,
   réduisez le stress et boostez votre vitalité.
    </p>
  </div>
  <div className="card-footer"><Link to ="/nutrition" className='link-carde'>Nos temoigages</Link></div>
</div>
</div>
<div className='col-lg-3 col-sm-12'>
<div className="card text-center modified">
  <div className="bg-image hover-overlay ripple pt-5" data-mdb-ripple-color="light">
  <img  src={staff9}   className="programe-icon " alt="Fissure in Sandstone"
              />
    <Link to="https://californiagym-sousse.virtuagym.com/user/fouedbelajouza-f7612895/exercise/trainingplan">
      
    </Link>
  </div>
 
  <div className="card-body">
  <h5 className="card-title carde">Santé et vitalité</h5>
    <p className="card-text">
    Prenez soin de votre santé avec un programme complet qui
     combine activité physique, nutrition équilibrée et conseils de bien-être.
    </p>


  </div>
  <div className="card-footer"><Link to ="/nutrition" className='link-carde'>Programe Santé</Link></div>
</div>
</div>
</div>
</div>
<div className=" col-lg-12 col-sm-12 pt-5">
  <h1 className="feedback pb-2">Others Stories</h1>{/*new 1 carrousel*/}
</div>
<div className='container-fluid info-bg'>

<div className='col-lg-12 col-sm-12'>
<div className='row'>
 <div className='col-lg-8 col-sm-12 '>
 <div className='health-3'>
  <h1 className='health-1 ps-5 pt-3'>We Provide Free Health Care Consultation</h1>
<p className='health-2 ps-5' style={{letterSpacing:"2px"}}>Your Health is Our Top Priority with Comprehensive, Affordable Health.</p>
</div>
</div>
<div className='col-lg-4 col-sm-12 text-end pe-5 pb-3'>
  <div className=''>
<Link to="/register" data-bs-ripple-init  className="btn btn-white mt-4 health-register">Register</Link>
</div>
</div>
</div>
</div>
</div>
<div className=" col-lg-12 col-sm-12 mt-2 pt-5 plans-1">
  <p className='plans '>Plans & Prices</p>
  <h1 className="price pb-2">Choose Your Perfect plans</h1>  
  </div>
  {/*add person*/}
  <section className=''>
      <div className='container-fluid pt-5 bg bg-subtle programe-res-2'>
      <div className="row">
         {/* Image qui glisse de la gauche */}
         <div className="col-md-6 gx-5 mb-4 ps-3 col-sm-12  d-flex justify-content-center pt-5">
          <div className="bg-image hover-overlay shadow-2-strong text-center" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src = {persone3} className="img-fluid avis" alt=''/>
            <Link to="#!">
              <div className="mask" style={{backgroundColor: 'lightblue'}}></div>
            </Link>
          </div>
          </div>

        <div className="col-md-6 gx-5 mb-4 col-sm-12 ">
        <Link to="https://virtuagym.com/user/fouedbelajouza-f7612895/nutrition" className='fs-4 link-res-5' style={{ textDecoration: 'none' }}> Programe Entrainement</Link>
          <p className="text-muted">
          Un programme d'entraînement efficace combine cardio (30 minutes, 3-5 fois par semaine) pour l'endurance, renforcement musculaire (2-3 séances par semaine) pour la force, et des étirements réguliers pour améliorer la souplesse.
           Ajuste l'intensité selon ton niveau, en augmentant progressivement la difficulté pour éviter les blessures. 
          </p>
        <Link to="/nutrition" className='fs-4 link-res-5' style={{ textDecoration: 'none' }}> Programe Nutrition</Link>
          <p className="text-muted">
          Ce régime vous aidera à perdre du poids de façon durable et vous permettra de maigrir progressivement tout en conservant les nutriments essentiels. 
          Ce régime est établi à partir d'une combinaison parfaitement équilibrée entre des aliments sains et un faible apport en graisses et en glucides.
          </p>
          <Link to="/programe-dietetique" className="fs-4 link-res-5" style={{ textDecoration: 'none' }}>  Programme Diététique
</Link>

          <p className="text-muted">
           
Un programme diététique équilibré inclut des repas riches en légumes, protéines maigres (poisson, poulet, tofu) et glucides complets (riz brun, quinoa). Privilégie les collations légères comme des fruits ou des noix, tout en buvant 1,5 à 2 litres d’eau par jour.
 Limite les sucres raffinés et les aliments transformés pour optimiser ton énergie et ta santé. 
          </p>
          </div>
      </div>
      </div>
    </section>
    
      
      
       
  </div> 
    
    </>

)
      }
export default Home;