import React from 'react';
import '../pages/styles/Help.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faUserTie, faChartLine, faUsers, faLaptop, faAppleAlt, faTree } from "@fortawesome/free-solid-svg-icons";
import ImgProgram from './images/codage-web.png'
import ImgHelp from './images/resultats-du-vote.png'
import ImgHealth from './images/nourriture-saine.png'
import ImgLife from './images/mode-de-vie.png'
import Help1 from './images/image_1.jpg'
import Help2 from './images/bg_2.jpg'
import Help3 from './images/bg_3.jpg'
import Help4 from './images/close-up-woman-exercising-with-dumbbell.jpg'
import Help5 from './images/beautiful-sports-couple-is-engaged-gym.jpg'
import Help6 from './images/handsome-man-is-engaged-gym.jpg'





const help = () => {
    return (
<>
<div className='container'>
    <div className='row'>
    <div className="container my-5">
  <h2 className="help-title mb-5">Our Services</h2>
  <div className="row">
   
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img src={Help1} className="card-img-top" alt="Personal Training"/>
        <div className="card-body text-center">
          <Link to="#"className="card-title link-nutrition pb-1">Personal Training</Link>
          <p className="card-text">
          Obtenez un coaching personnalisé avec nos entraîneurs certifiés pour vous aider à atteindre vos objectifs de fitness.
          </p>
        </div>
      </div>
    </div>

  
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img src={Help2} className="card-img-top" alt="Group Classes"/>
        <div className="card-body text-center">
          <Link to="#" className="card-title link-nutrition">Group Classes</Link>
          <p className="card-text">
          Rejoignez nos cours collectifs dynamiques, allant du yoga à l'entraînement par intervalles à haute intensité.
          </p>
        </div>
      </div>
    </div>

   
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img src={Help3}  className="card-img-top" alt="Nutrition Coaching"/>
        <div className="card-body text-center">
          <Link to="/nutrition" className="card-title link-nutrition">Nutrition Coaching</Link>
          <p className="card-text">
          Travaillez avec nos nutritionnistes pour créer un plan de repas personnalisé qui complète votre routine de fitness.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container my-2">
  <h2 className="help-title-1 mb-3 pb-2">About Our coachs</h2>
  <p className="text-help mb-5">
  Nous proposons une variété de services de fitness pour vous aider à atteindre vos objectifs de santé. Du coaching personnel aux cours collectifs en passant par le suivi nutritionnel, notre équipe est dédiée à vous offrir la meilleure expérience.
  </p>

  <div className="row">
  
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="text-center">
        <img src={Help4} className="img-fluid mb-3" alt="Personal Training"/>
        <h5>Personal coach</h5>
        <p>Des séances individuelles avec des entraîneurs experts pour adapter votre entraînement à vos besoins et objectifs spécifiques.</p>
      </div>
    </div>
  
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="text-center">
        <img src={Help5} className="img-fluid mb-3" alt="Group Classes"/>
        <h5>Yoga Coach</h5>
        <p>Rejoignez nos séances de groupe dynamiques, du yoga aux entraînements à haute intensité, conçues pour tous les niveaux de forme physique.</p>
      </div>
    </div>

   
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="text-center">
        <img src={Help6} className="img-fluid mb-3" alt="Nutrition Coaching"/>
        <h5>Nutrition Coaching</h5>
        <p>Work with our nutrition experts to create a meal plan that supports your fitness journey and health goals.</p>
      </div>
    </div>
  </div>
</div>
{/*section/*/}
    <section className="services my-5">
      <div className="container">
        <h2 className="title-help-3 mb-5">Others Services</h2>
        <div className="row">
          {/* Coaching personnalisé */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <FontAwesomeIcon icon={faUserTie} className="service-icon" />
              <h3 className="text-center">Coaching Personnalisé</h3>
              <p>
                Séances individuelles avec nos entraîneurs experts pour personnaliser votre programme d'entraînement en fonction de vos besoins spécifiques.
              </p>
            </div>
          </div>

          {/* Suivi de progression */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <FontAwesomeIcon icon={faChartLine} className="service-icon" />
              <h3 className="text-center">Suivi de Progression</h3>
              <p>
                Recevez un suivi personnalisé de vos progrès avec des rapports détaillés pour rester motivé et ajuster vos entraînements.
              </p>
            </div>
          </div>

          {/* Séances de groupe */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <FontAwesomeIcon icon={faUsers} className="service-icon" />
              <h3 className="text-center">Séances de Groupe</h3>
              <p>
                Participez à nos séances de groupe dynamiques allant du yoga aux entraînements à haute intensité, adaptés à tous les niveaux de forme physique.
              </p>
            </div>
          </div>

          {/* Coaching à distance */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <FontAwesomeIcon icon={faLaptop} className="service-icon" />
             <h3 className="text-center">Coaching à Distance</h3>
              <p>
                Entraînez-vous où que vous soyez grâce à nos séances de coaching en ligne. Suivez vos progrès à distance avec nos entraîneurs certifiés.
              </p>
            </div>
          </div>

          {/* Ateliers nutrition */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <FontAwesomeIcon icon={faAppleAlt} className="service-icon" />
              <h3 className="text-center">Ateliers Nutrition</h3>
              <p>
                Apprenez à mieux nourrir votre corps avec nos ateliers mensuels sur la nutrition et la santé mentale.
              </p>
            </div>
          </div>

          {/* Séances en extérieur */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
              <FontAwesomeIcon icon={faTree} className="service-icon" />
              <h3 className="text-center">Séances en Extérieur</h3>
              <p>
                Réalisez vos entraînements en plein air et connectez-vous à la nature tout en atteignant vos objectifs fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


{/*section/*/}
    <section className="ftco-section bg-light">
    	<div className="container">
    		<div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	            <h2 className='pt-3 mt-5'>How it works?</h2>
          </div>
        </div>
    		<div className="row">
          <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
              <img src={ImgProgram} className='icon-help' alt=''/>
              </div>
              <div className="media-body p-2 mt-3">
           
                <h3 className="heading">Follow the program</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<img src={ImgHelp} className='icon-help' alt=''/>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Work for result</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
            		<img src={ImgHealth} className='icon-help' alt=''/>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Eat healthy food</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
            <div className="d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
              <img src={ImgLife} className='icon-help' alt=''/>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Enjoy your life</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
        </div>
    	</div>
    </section>
    </div>
    </div>    
     
           


</>

    )
}
export default help;