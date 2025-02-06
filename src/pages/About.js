
import '../pages/styles/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import imageSite from './images/img-about.jpg'
import React, { useEffect,useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    <div className='container-fluid bg-light-subtle'>
        <div className='col-lg-12 col-sm-12'>
        <div className='pt-5'>
          <div style={{ paddingTop: "", textAlign: "center", justifyContent: "center",color: "#1089ff" }}>
      <h2 className={isVisible ? "visible" : "hidden"}>About our Services !</h2>
      <style>{`
        .hidden { opacity: 0; transform: translateY(20px); transition: all 0.5s; }
        .visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
          </div>
     <div className="bg-image mt-5">
      <img src={imageSite} className='img-site' alt="2025: Courez vers l’avenir avec style (et un soupçon d’ironie)"/>

</div>
 <section className='our-story mt-5'>
<div className="row">
   
            
  <div class="container">
    <h2>Our Story</h2>
    <p className='paragraph-text'>
      WorldFitness a été créé par une équipe passionnée de professionnels du fitness qui ont ressenti un manque d'informations fiables sur la santé et le fitness sur le web. Frustrés de constater que beaucoup dans l'industrie du fitness étaient davantage centrés sur le profit ou l'apparence extérieure que sur une santé durable et réalisable, ils ont décidé de faire la différence.
    </p>
    <p className='para-text'>
      Aujourd'hui, plus de 10 ans après, notre mission reste inchangée. Nous sommes toujours guidés par ces objectifs fondamentaux :
    </p>
    <ul className='para-text'>
      <li>Rendre la santé et le fitness accessibles, abordables et adaptés à tous.</li>
      <li>Encourager la consommation d'aliments complets et non transformés, et promouvoir l'entraînement pour un corps fort et sain.</li>
      <li>Favoriser une approche personnelle et consciente de l'alimentation et de l'exercice.</li>
      <li>Promouvoir le fait que le bien-être global est unique à chaque individu.</li>
    </ul>
    <p className='para-text'>
      Chez WorldFitness, nous croyons que le chemin vers une vie en meilleure santé commence par des choix simples et durables, adaptés à vos besoins personnels.
    </p>
  </div>


          </div>
        </section>
        
    
        <hr className="my-5" />
    
       
       <div className='container ms-5'>         
         <div className="row about-coach">
            <div className="col-lg-4 col-md-12 mb-4 ps-5 col-sm-12">
              <div className="card card-about ms-5">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" alt='bieautiful nature' />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Get More, Give More</h5>
                  <p className="card-text">
                  FB Plus membership not only gives you access to exclusive content,
                   programs, it also supports our free content for everyone.
                  </p>
                  <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Upgrade plus</a>
                </div>
              </div>
            </div>
    
            <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
              <div className="card card-about ms-5">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" alt='nice wreather' className="img-fluid" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fitness for Free</h5>
                  <p className="card-text">
                  We believe fitness should be accessible to everyone, everywhere,
                   regardless of income level or access to a gym.
                  </p>
                  <a href="#!" className="btn btn-primary" data-mdb-ripple-init> free workouts</a>
                </div>
              </div>
            </div>
    
            <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
              <div className="card card-about ms-3">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" alt='nice nature' className="img-fluid" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor:' rgba(251, 251, 251, 0.15)'}}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Meet the Fitness Coach</h5>
                  <p className="card-text">
                  We are proud of the talented, cross-disciplinary team we’ve built
                   to continue growing our library of fitness and wellness content
                  </p>
                  <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Join the team</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        
 
    
        <hr className="my-5" />
        <section class="about-section">
  <div class="container">
    <h1 class="about-title">À propos de WorldFitness</h1>
    <p class="about-subtitle">"Votre parcours commence ici."</p>
    <div class="about-content">
      <p className='para-text'>
        Chez <strong>WorldFitness</strong>, nous croyons que chaque individu a le potentiel de transformer son corps et son esprit. 
        Nous ne faisons pas que vous guider ; nous vous motivons, nous vous inspirons et nous vous accompagnons à chaque étape de votre parcours fitness.
      </p>
      <p className='para-text'>
        🌟 <strong>Notre mission :</strong> Vous aider à atteindre vos objectifs, qu'il s'agisse de perte de poids, de prise de masse musculaire 
        ou simplement de vous sentir mieux dans votre peau. Nous offrons des programmes d’entraînement, des conseils nutritionnels et un soutien 
        personnalisé pour que vous puissiez réussir.
      </p>
      <blockquote class="coach-advice">
        "Ne vous comparez pas aux autres. Comparez-vous à la personne que vous étiez hier."  
        <span>- Votre Coach, WorldFitness</span>
      </blockquote>
      <p className='end-text'>
        Prêt à relever le défi ? Rejoignez-nous dès aujourd'hui et devenez la meilleure version de vous-même. Parce que chez WorldFitness, 
        chaque pas compte ! 💪
      </p>
    </div>
  </div>
</section>

</div>
       
        <section className="mb-5">
          
    
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-12">
              <form className='border-login'>
               
                <div className="row mb-4">
                <h2 className="mb-5 text-center title-end">Contact Us</h2>
                  <div className="col">
                    <div className="form-outline" data-mdb-input-init>
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline" data-mdb-input-init>
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>
    
               
                <div className="form-outline mb-4" data-mdb-input-init>
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>
    
                <div className="form-outline mb-4" data-mdb-input-init>
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>
    
             
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" checked />
                  <label className="form-check-label" for="form2Example3">
                    Subscribe to our newsletter
                  </label>
                </div>
    
               
                <button type="submit" className="btn btn-primary btn-block mb-4" data-mdb-ripple-init>
                  Sign up
                </button>
    
              
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1" data-mdb-ripple-init>
                    <i className="fab fa-facebook-f"></i>
                  </button>
    
                  <button type="button" className="btn btn-primary btn-floating mx-1" data-mdb-ripple-init>
                    <i className="fab fa-google"></i>
                  </button>
    
                  <button type="button" className="btn btn-primary btn-floating mx-1" data-mdb-ripple-init>
                    <i className="fab fa-twitter"></i>
                  </button>
    
                  <button type="button" className="btn btn-primary btn-floating mx-1" data-mdb-ripple-init>
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
          </div>
          );
};

export default About;
