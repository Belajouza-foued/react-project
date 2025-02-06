
import '../pages/styles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import image1 from '../pages/images/bg_1.jpg';
import image2 from '../pages/images/bg_2.jpg';
import coach from '../pages/images/coach-1.jpg'
import coach1 from '../pages/images/coach-1.jpg'
import staff1 from '../pages/images/staff-1.jpg'
import staff2 from '../pages/images/staff-2.jpg'
import staff3 from '../pages/images/staff-3.jpg'
import staff4 from '../pages/images/staff-4.jpg'
import staff6 from '../pages/images/staff-6.jpg'
import staff10 from '../pages/images/dumbbell-ray.svg'
import staff7 from '../assets/icons/data.png'
import staff8 from '../assets/icons/loyalty-program.png'
import staff9 from '../assets/icons/meal.png'
import persone1 from '../pages/images/person-1.jpg'
import persone2 from '../pages/images/person-2.jpg'
import persone3 from '../pages/images/image_5.jpg'
import proud1 from '../assets/icons/success-story (1).png'
import React, { useState, useEffect } from "react";
/*npm install react-simple-typewriter*/

import { Typewriter } from "react-simple-typewriter"; // ✅ Ajout de Typewriter

const Home = () => {
            const [isExpanded, setIsExpanded] = useState(false);
        const [isExpandedNutrition, setIsExpandedNutrition] = useState(false);
        const [isExpandedDietetique, setIsExpandedDietetique] = useState(false);
        const [displayText, setDisplayText] = useState("");
        const [count, setCount] = useState(0);
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
          let i = 0;
          const interval = setInterval(() => {
            setDisplayText(text.substring(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
          }, speed);
          return () => clearInterval(interval);
        }, []);
        useEffect(() => {
          let interval = setInterval(() => {
            setCount((prev) => (prev < 100 ? prev + 1 : 3000));
          }, 50);
          return () => clearInterval(interval);
        }, []);
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
   
  <div className='container-fluid bg-light-subtle'>
 <div className="carousel-header">
 
  <div className='col-lg-12 col-sm-12'>
  
 <h2 style={{color:"#1089ff"}}>{displayText}</h2> {/* ✅ Affichage progressif du texte */}
      <Typewriter
        words= {["Bienvenue sur mon site !", "Découvrez nos services", "Contactez-nous"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      
         <h2>Visiteurs : {count}</h2>;
             
         

            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src={image2} className="img-fluid" alt="pour femme enceinte"/>
                        <div className="carousel-caption">
                            <div className="text-center p-4">
                                <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Welcome to wordFitness</h4>
                              
                                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Fitness pour femme enceinte et debutante</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">Déverrouillez votre potentiel grâce à une bonne nutrition. ransformez votre santé en changeant vos habitudes, 
                                </p>
                                <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="#">More Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image1} className="img-fluid" alt="pour femme"/>
                        <div className="carousel-caption">
                            <div className="text-center p-4">
                                                              <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Best Visa Immigrations Services</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">Déverrouillez votre potentiel grâce à une bonne nutrition. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                                <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="#">More Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
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
              {/*scroll*/}
              </div>
      
       
        <div className='col-lg-12 col-sm-12 pt-5'>
          <div style={{ paddingTop: "", textAlign: "center", justifyContent: "center",color: "#1089ff" }}>
      <h2 className={isVisible ? "visible" : "hidden"}>Je s'affiche au scroll !</h2>
      <style>{`
        .hidden { opacity: 0; transform: translateY(20px); transition: all 0.5s; }
        .visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
          </div>
        <section className="ftco-section ftco-services ">
     
    	<div className="container mt-5 ">
        <div className='col-lg-12 col-sm-12'>
    		<div className="row">
        
				<div className="col-md-4 col-sm-12 d-flex services align-self-stretch px-4 ftco-animate">
					<div className="d-block services-wrap text-center">
					  <div className="img-1b ms-4"></div>
					  <div className="media-body p-2">
						<h3 className="heading">Programme pour débutantes</h3>
									         <div>
      <p>
      Un programme sur mesure pour aider les débutantes à démarrer leur parcours de fitness en toute confiance.</p>
        {isExpanded && ( <p id="more-text"> Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
       </p> )}
      <button className="btn btn-primary btn-outline-primary"id="read-more-btn"  onClick={toggleText}  >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
                        
					  </div>
					</div>      
				  </div>
				  
          <div className="col-md-4  col-sm-12 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block services-wrap text-center">
              <div className="img-2b ms-3"></div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Plan nutritionel</h3>
			 <p>Des plans nutritionnels équilibrés pour atteindre vos objectifs santé et bien-être.</p>
        {isExpandedNutrition && ( <p id='more-text-nutrition'> Un plan nutritionnel bien conçu est essentiel pour atteindre vos objectifs de santé et de bien-être.
        Que vous cherchiez à perdre du poids, à gagner en muscle ou simplement à améliorer votre alimentation, un plan personnalisé vous aidera à suivre une alimentation équilibrée et adaptée à vos besoins spécifiques.</p>
        )}
			
			                                
  <button  className="btn btn-primary btn-outline-primary mt-2" id="read-more-btn-nutrition"  onClick={toggleNutrition}>
  {isExpandedNutrition ? 'Read less' : 'Read more'}
  </button>

              </div>
            </div>    
          </div>
          <div className="col-md-4 col-sm-12 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block services-wrap text-center">
              <div className="img-b3 ms-3"></div>
              <div className="media-body p-2 mt-3">
            <h3 className="heading">Programe diétetique</h3>
                <p>Programme diététique adapté pour une transformation saine et durable que ce soit la prise ou perte de muscle..</p>
				
        
					{isExpandedDietetique && (
            <div id="more-text-dietetique" className='more-text-dietetique'>
          
					<p>Notre programme diététique inclut :</p>
					<ul>
					  <li><strong>Des repas riches en protéines</strong> pour favoriser la construction musculaire et la récupération.</li>
					  <li><strong>Des glucides complexes</strong> pour maintenir l'énergie tout au long de la journée.</li>
					  <li><strong>Des graisses saines</strong> pour la fonction cellulaire et l’absorption des vitamines.</li>
					  <li><strong>Des fibres</strong> pour améliorer la digestion et réguler le transit intestinal.</li>
					  <li><strong>Des micronutriments</strong> pour renforcer le système immunitaire.</li>
					</ul></div>
          )}
               
                
  <button  className="btn btn-primary btn-outline-primary" id="read-more-btn-dietetique"  onClick={toggleDietetique}>
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
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="card-body pt-5">
          <h5 className="card-title title-1">Welcome to Healthcare</h5>
          <p className="card-text fs-4">
          Prendre soin de sa santé de manière naturelle est l une des meilleures façons 
          d améliorer son bien-être global.
          </p>
          <p className="card-p fs-6 ">
          En adoptant des habitudes saines, comme une alimentation équilibrée, une activité physique régulière et une bonne 
          gestion du stress, vous pouvez renforcer votre corps et votre esprit.
          </p>
          <p className="card-p fs-6">
          La santé naturelle se concentre sur des approches douces et préventives, privilégiant les remèdes issus de la nature et des changements de mode de vie pour favoriser un équilibre durable. 
          Cela vous permet de maintenir votre vitalité tout en respectant le rythme de votre corps.
          </p>
          
            <img className='coach-logo mt-3' src={coach1} alt=''/>
           <div className='text-logo pt-1 mt-3'>
            <p className="ps-3 fs-5 foued custom pt-2">Foued belajouza</p>
            <p className="ps-3 pb-2 custom" >rihgab khouaja</p>
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
							<Link to ="#"className="btn-custom">See Services</Link>
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
    <div className=" col-lg-12 col-sm-12 pt-5">
  <h1 className="feedback">FeedBack Clients</h1>

{/*card feedback*/}
<div className='d-flex justify-content-center align-items-center min-vh-100'>

<div
  id="carouselMultiItemExample"
   className="carousel slide carousel-dark text-center"
  data-bs-ride="carousel"
>

  <div className="d-flex justify-content-center mb-4">
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
 
  <div  className="carousel-inner py-4">
   
    <div  className="carousel-item active">
      <div  className="container">
        <div  className="row">
          <div  className="col-lg-4">
            <div  className="card">
              <img
                src={staff1}
                className="card-img-top"
                alt="Waterfall"
              />
              <div  className="card-body">
                <h5  className="card-title"> Yassine Khaled </h5>
                <p  className="card-text">
                Grâce à ce programme, j'ai retrouvé ma forme et une énergie incroyable au quotidien !
                </p>
                <Link to="#" data-bs-ripple-init  className="btn btn-primary">Button</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 d-none d-lg-block">
            <div className="card">
              <img
                src={staff2}
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div  className="card-body pt-4">
                <h5  className="card-title">Sami Nouir</h5>
                <p  className="card-text">
                Un accompagnement personnalisé et des résultats visibles dès le premier mois. Je recommande !
                </p>
                <Link to="#!" data-bs-ripple-init className="btn btn-primary">Button</Link>
              </div>
            </div>
          </div>

          <div  className="col-lg-4 d-none d-lg-block col-sm-12">
            <div  className="card">
              <img
                src={staff3}
                cl className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div  className="card-body">
                <h5  className="card-title">Yamen Mohamed</h5>
                <p  className="card-text">
                L'équipe est super motivante, et le suivi m'a permis de dépasser mes limites. Merci infiniment !
                </p>
                <Link to="#!" data-bs-ripple-init  className="btn btn-primary">Button</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src={staff4}
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">Nicolas Durant</h5>
                <p className="card-text">
                Une équipe à l’écoute et un programme qui s’adapte parfaitement à mes besoins.
                </p>
                <Link to="#!" data-bs-ripple-init  className="btn btn-primary">Button</Link>
              </div>
            </div>
          </div>

               <div className="col-lg-4 d-none d-lg-block col-sm-12">
            <div className="card">
              <img
                src={staff6}
                className="card-img-top"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title">Sarra Amri</h5>
                <p className="card-text">
                Le suivi est excellent, et je vois des progrès chaque semaine.Merci! 
                </p>
                <Link to="#!" data-bs-ripple-init  className="btn btn-primary">Button</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src={staff4}
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">Nicolas Durant</h5>
                <p className="card-text">
                Une équipe à l’écoute et un programme qui s’adapte parfaitement à mes besoins.
                </p>
                <Link to="#!" data-bs-ripple-init  className="btn btn-primary">Button</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   

  </div>

</div>
</div>
</div>
<div className=" col-lg-12 col-sm-12">
  <h5 className="feedback-1">others services</h5>
  <h1 className='feedback-2'>How it works</h1>
</div>
<div className='container'>
  <div className='row'>
  <div className='col-lg-3 col-sm-12'>
<div className="card text-center modified">
  <div className="bg-image hover-overlay ripple pt-5" data-mdb-ripple-color="light">
  <img  src={staff10}   className="programe-icon " alt="Fissure in Sandstone"
              />
    
  </div>
 
  <div className="card-body">
    <h5 className="card-title">Sceances d'entrainement</h5>
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
  <h1 className="feedback pb-2">Others Stories</h1>



{/*new 1 carrousel*/}
<div className="new-carroussel bg-light">
  <div className="new-slides">
    
    <div className="new-slide bg-whight">
      <div className="slide-image">
        <img src={persone2} alt="" className="img-fluid h-100 w-100" />
      </div>
     
      <div className="slide-text">
      <img src={proud1} alt='' className='proud mb-3'/>
        <h5 className="title-1 ">Stay Healthy</h5>
        <p className="fs-4">carde
          La meilleure façon d’améliorer son bien-être global est de prendre soin de sa santé naturellement.
          <p className="fs-6">
          En adoptant des habitudes saines, comme une alimentation équilibrée, une activité physique régulière et une bonne gestion du stress.
        </p>
        </p>
      </div>
    </div>
    <div className="new-slide bg-whight">
      <div className="slide-image">
        <img src={coach} alt="" className="img-fluid h-100 w-100" />
      </div>
      <div className="slide-text">
      <img src={proud1} alt='' className='proud2 mb-3'/>
        <h5 className="title-1">Welcome to Healthcare</h5>
        <p className="fs-4">
          Prendre soin de sa santé de manière naturelle est l’une des meilleures façons d’améliorer son bien-être global.
        </p>

        <p className="fs-6">
          En adoptant des habitudes saines, comme une alimentation équilibrée, une activité physique régulière et une bonne gestion du stress.
        </p>
      
      </div>
    </div>
    <div className="new-slide bg-whight">
      <div className="slide-image">
        <img src={persone1} alt="" className="img-fluid h-100 w-100" />
      </div>
      <div className="slide-text">
      <img src={proud1} alt='' className='proud mb-3'/>
        <h5 className="title-1">Welcome to Healthcare</h5>
        <p className="fs-4">
          Prendre soin de sa santé de manière naturelle est l’une des meilleures façons d’améliorer son bien-être global.
        </p>
        <p className="fs-6">
          En adoptant des habitudes saines, comme une alimentation équilibrée, une activité physique régulière et une bonne gestion du stress.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<div className='container-fluid info-bg'>

<div className='col-lg-12 col-sm-12'>
<div className='row'>
 <div className='col-lg-8 col-sm-12'>
  <h1 className='health'>We Provide Free Health Care Consultation</h1>
<p className='health' >Your Health is Our Top Priority with Comprehensive, Affordable Health.</p>
</div>
<div className='col-lg-4 col-sm-12'>
<Link to="/register" data-bs-ripple-init  className="btn btn-white mt-4" style={{ width: '200px', height:'45px' }}>Rejister</Link>
</div>
</div>
</div>
</div>
<div className=" col-lg-12 col-sm-12 mt-2 pt-3">
  <p className='plans pt-2'>Plans & Prices</p>
  <h1 className="price">Choose Your Perfect plans</h1>  
  </div>
  {/*add person*/}
  <section>
    <div className='container-fluid pt-5 bg bg-subtle'>
      <div className="row">
        <div className="col-md-6 gx-5 mb-4 ps-3 col-sm-12  d-flex justify-content-center pt-5">
          <div className="bg-image hover-overlay shadow-2-strong" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src = {persone3} className="img-fluid avis" alt=''/>
            <Link to="#!">
              <div className="mask" style={{backgroundColor: 'lightblue'}}></div>
            </Link>
          </div>
        </div>

        <div className="col-md-6 gx-5 mb-4 col-sm-12 ">
        <Link to="https://virtuagym.com/user/fouedbelajouza-f7612895/nutrition" className='fs-4' style={{ textDecoration: 'none' }}> Programe Entrainement</Link>
          <p className="text-muted">
          Un programme d'entraînement efficace combine cardio (30 minutes, 3-5 fois par semaine) pour l'endurance, renforcement musculaire (2-3 séances par semaine) pour la force, et des étirements réguliers pour améliorer la souplesse.
           Ajuste l'intensité selon ton niveau, en augmentant progressivement la difficulté pour éviter les blessures. 
          </p>
        <Link to="/nutrition" className='fs-4' style={{ textDecoration: 'none' }}> Programe Nutrition</Link>
          <p className="text-muted">
          Ce régime vous aidera à perdre du poids de façon durable et vous permettra de maigrir progressivement tout en conservant les nutriments essentiels. 
          Ce régime est établi à partir d'une combinaison parfaitement équilibrée entre des aliments sains et un faible apport en graisses et en glucides.
          </p>
          <Link to="/programe-dietetique" className="fs-4" style={{ textDecoration: 'none' }}>  Programme Diététique
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