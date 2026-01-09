import React from 'react';
import '../pages/styles/Nutrition.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import coach1 from '../pages/images/coach-1.jpg'
import coach from '../pages/images/coach-1.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { FaHouseUser,FaDumbbell,FaNutritionix,FaFemale,FaUsers, FaPhone } from 'react-icons/fa';


const Nutrition = () => {
    return (
<>

           <body>
               <div className="container-fluid bg bg-light ps-5">
                   <div className="row">
               <div className="col-lg-3 col-sm-12 pt-5 mt-5 form-title">
                   <div className="text-center pt-5 p-0 m-0">
                  
                 
               <div className="card card-pregnant" >
               <img src="images/pregnant-1.jpg" alt="pregnant" className="pregnant-img "/>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight:"bolder", fontSize: "25px"}} >femme enceinte</h5>
    <p className="card-text">Renforcez votre corps, soulagez les tensions, et préparez-vous pour l’arrivée de votre bébé avec des exercices adaptés à chaque trimestre.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><Link to="https://virtuagym.com/nutrition/search" className="programe">programe nutrition</Link></li>
    <li className="list-group-item"><Link to="https://www.kinatex.com/cliniques/laval/education-et-conseils/sante-de-la-femme-enceinte-au-1er-trimestre-exercices/" className="programe">Conseils et Prevention</Link></li>
    <li className="list-group-item"><Link to="https://www.mega-gear.net/fr/blog/231-programme-femmes-debutant-musculation" className="programe">programe musculation</Link></li>
  </ul>
  <div className="card-body">
    <Link to="#" className="card-link">Card link</Link>
    <Link to="#" className="card-link">Another link</Link>
  </div>
</div>
 
               </div>
               
               <div className="accordion accordion-flush pt-5 accordion-pregnant" id="accordionFlushExample">
 <div className="accordion-item">
   <h2 className="accordion-header">
     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Est-ce-que je vais perdre ce poids avec ce genre de regime?
     </button>
   </h2>
   <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
     <div className="accordion-body">Il est impossible de repondre a cette question car de nomlbreuse facteurs entrent en jeu:votre age,votre activité physique,votre poids et votre métabolisme <code>Brulures de graisses ou draineurs</code></div>
   </div>
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header">
     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Est-ce-que je vais etre fatigué de suivre ce programe,
     </button>
   </h2>
   <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
     <div className="accordion-body">Oui cela peut arriver.  Si la fatigue est importante, adoucissez votre régime et rajoutez un peu de féculents.Penser egalement a prendre un peu de feculents<code>une complémentation en vitamines et minéraux.</code></div>
   </div>
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header">
     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Y a t-il des aliments interdits avec ce regime?
     </button>
   </h2>
   <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
     <div className="accordion-body"> Non.Sachez toutefois que les aliments « vides » telles que les sucreries, les fast-food et autres junk food vont entretenir vos envies de manger et de manger plus. Je ne peux que vous conseiller de rester aussi loin que possible de ce type d aliments.</div>
   </div>
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header">
     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFor" aria-expanded="false" aria-controls="flush-collapseFor">
   Que puis-je prendre comme collation?
     </button>
   </h2>
   <div id="flush-collapseFor" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
     <div className="accordion-body"> Si vous souhaitez des collations différentes, essayer une poignée de noix (de Grenoble, amandes, noisettes …) associées à des fruits secs (abricots, dattes …). Découvrez également nos idées de collations healthy.. Je ne peux que vous conseiller de rester aussi loin que possible de ce type d aliments<code>idées de collations healthy.</code>Vous pouvez aussi opter  <code>ides barres protéinées.</code>.</div>
   </div>
 </div>
</div>
{/*iframe*/}
<div className='pt-5 video-pregnant'>
<Link 
            to="https://virtuagym.com/video-on-demand/category/185/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary d-flex text-align-center justify-content-center align-item-center w-70"
        >
            Regardez les vidéos
        </Link>
        </div>
        <div className="block-7 mt-5 p-0 p-0 col-3 mx-auto"  style={{ width: '100%', maxWidth: '300px' }}>
	            <div className="text-center">
	            	<h4 className="heading-2">Starter</h4>
	            	<span className="excerpt d-block">A Beautiful Healthcare</span>
		            <span className="price"><sup>$</sup> <span class="number">49</span></span>
		            
		            <ul className="pricing-text mb-5">
		              <li>20 Workouts</li>
		              <li><span className="fa fa-check mr-2"></span>Meal plans in mobile</li>
		              <li><span className="fa fa-check mr-2"></span>One Coaching</li>
		              <li><span className="fa fa-check mr-2"></span>-50% Group coaching</li>
		              <li><span className="fa fa-check mr-2"></span>24/7 Customer support</li>
		            </ul>

		            <Link to="#" className="btn btn-primary mb-5">Get Started</Link>
	            </div>
	          </div>
            <div className='sidebar'>
            <div className="sidebar-header ">
    <h3 className='world-title'>WorldFitness</h3>
  </div>
  <ul className="sidebar-menu">
    <li><Link to="/home">   <FaHouseUser className= "pe-2"style={{ fontSize: '30px', color: 'white' }} />home</Link></li>
    <li><Link to="#workouts"><FaDumbbell className= "pe-2" style={{ fontSize: '30px', color: 'white' }} />Workouts</Link></li>
    <li><Link to="#nutrition"><FaNutritionix className= "pe-2 pb-1" style={{ fontSize: '30px', color: 'white' }} />Nutrition</Link></li>
    <li><Link to="#pregnancy"><FaFemale className= "pe-2 pb-1" style={{ fontSize: '30px', color: 'white' }} />Fitness for Moms</Link></li>
    <li><Link to="#community"><FaUsers className= "pe-2 pb-1" style={{ fontSize: '30px', color: 'white' }} />Community</Link></li>
    <li><Link to="#contact"><FaPhone className= "mb-3 ps-2" style={{ fontSize: '30px', color: 'white', transform: 'rotate(90deg)'  }} />Contact</Link></li>
  </ul>
  <div className="sidebar-footer">
    <p>&copy; 2024 WorldFitness</p>
  </div>
  </div>
                
               </div>
               <div className="col-lg-9 col-sm-12 pt-4 ps-5 container-fluid title-pregnant">
               <h1 className="pt-3 mb-2 me-2 title-nutrition">Plan Nutritionnel</h1>
               <div className="form-nutririon pt-3 ps-3">
           
               <p className="text-pregnant">Un plan nutritionnel équilibré est essentiel pour maintenir une bonne santé. Voici un aperçu des différents nutriments, leurs sources et les bénéfices qu'ils apportent à votre corps.</p>
           
               <h3 className='nutriment'>Les Nutriments Essentiels</h3>
           
               <p className='text-pregnant'>Les nutriments se divisent en plusieurs catégories, chacune ayant des fonctions spécifiques. Nous allons explorer les macronutriments ainsi que les micronutriments, qui sont tous deux indispensables pour le bon fonctionnement de l'organisme.</p>
           
              <div className="table-responsive">
  <table className="table table-bordered">
    <thead className="table-light">
      <tr>
        <th>Catégorie</th>
        <th>Source</th>
        <th>Bénéfices</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Protéines</td>
        <td>Viandes maigres, poisson, œufs, légumineuses</td>
        <td>Construction et réparation des muscles</td>
      </tr>
      <tr>
        <td>Glucides</td>
        <td>Pain, riz, pâtes, fruits</td>
        <td>Fournissent de l’énergie</td>
      </tr>
      <tr>
        <td>Lipides</td>
        <td>Huiles végétales, avocats, noix</td>
        <td>Source d’énergie durable</td>
      </tr>
      <tr>
        <td>Vitamines</td>
        <td>Fruits, légumes, produits laitiers</td>
        <td>Renforcent l’immunité</td>
      </tr>
      <tr>
        <td>Minéraux</td>
        <td>Noix, graines, légumes verts</td>
        <td>Santé des os</td>
      </tr>
    </tbody>
  </table>
</div>

           
               <h2>Les Bénéfices d'une Alimentation Équilibrée</h2>
           
               <p>Adopter une alimentation équilibrée permet non seulement de maintenir un poids sain, mais aussi de prévenir certaines maladies chroniques comme le diabète et les maladies cardiovasculaires. Chaque catégorie de nutriments joue un rôle unique et crucial pour garantir que votre corps fonctionne de manière optimale.</p>
               <h2>Alimentation de la future maman</h2>
           
               <p>Attendre un nouveau-né implique des changements physiologiques qui nécessitent un équilibrage des apports alimentaires. De quoi se nourrir et en quelles quantités pendant la grossesse pour faire un beau bébé ?</p>
           <h2>Les aliments qui comptent quand on attend un bébé</h2>
           <p>Les consignes concernant les adultes s’adaptent aux femmes enceintes. Si les nutriments sont variés et diversifiés, ils suffisent à couvrir les besoins durant la grossesse.</p>
           
       <h2>À surveiller côté minéraux</h2>
       <ul className="custom-list">
           <li><i className="fas fa-chevron-right me-2 chevron"></i><strong>Le calcium</strong></li><p>(1 200 mg/jour, dans les laitages) pour garantir la constitution du squelette du fœtus, et réduir le risque de décalcification du squelette de la future maman.</p>
           <li><i className="fas fa-chevron-right me-2 chevron"></i><strong>Le fer</strong></li><p>(20 mg/jour dans les viandes et les légumes secs) pour assurer le transport de l’oxygène dans le sang de la maman et du fœtus.</p>
           <li><i className="fas fa-chevron-right me-2 chevron"></i><strong>L iode</strong></li><p>(sel iodé, produits de la mer) pour le bon fonctionnement de la glande thyroïde.</p>
       </ul>
       <h2>À surveiller côté vitamines</h2>
       <ul className="custom-list">
           <li><i className="fas fa-chevron-right me-2 chevron"></i><strong>La vitamine B9</strong></li><p> (dans les légumes à feuilles vertes) pour prévenir une malformation du système nerveux de l’enfant et un accouchement prématuré..</p>
           <li><i className="fas fa-chevron-right me-2 chevron"></i><strong>La vitamine D</strong></li><p>our un apport en calcium.</p>
        </ul>
   <h2>Le juste équilibre alimentaire durant la grossesse</h2>
   <strong>Par rapport à une période normale hors grossesse les besoins sont augmentés de 250 à 300 calories par jour.</strong><p>Il faut alors plus de calories, sans exagérer : manger plus conduit à une prise de poids abusive dont il sera compliqué de s'en débarrasser après.</p>
   <p>Par contre, manger moins peut provoquer de fâcheuses carences pour le fœtus et la maman. Alors pas d’abus, mais pas de régime non plus !</p>
<h2>L’assiette parfaite</h2>
<p>En moyenne, quotidiennement il est conseillé de consommer :</p>
<ul className="custom-lister">
   <li>    150 à 200 g de viandes/poissons/œufs ;</li>
   <li>250 à 300 g de féculents ;</li>
   <li>150 g de pain ;</li>
   <li>200 à 300 g de légumes ;</li>
   <li>4 à 6 produits laitiers ;</li>
   <li>3 fruits et 50 g de matières grasses, de préférence végétales ;</li>
<li>de l’eau, au moins 1,5 l.</li>
</ul>
<h2>Une bonne répartition durant la journée</h2>
<strong>En cas de nausées ou de problème digestif:</strong><p>le mieux est de programmer plusieurs repas plutôt que 3 gros repas : petit-déjeuner, collation en milieu de matinée, déjeuner, goûter, dîner.</p>
<strong>En cas de petit creux</strong><p>e mieux est de prendre un laitage, un fruit et/ou un produit céréalier.</p>
<h2>À éviter, impérativement</h2>
<ul className="custom-list">
   <li><i className="fas fa-chevron-right me-2 chevron"></i>L’alcool, bien sûr ;</li>
   <li><i className="fas fa-chevron-right me-2 chevron"></i>Les charcuteries artisanales ;</li>
   <li><i className="fas fa-chevron-right me-2 chevron"></i>Les fromages au lait cru ;</li>
   <li><i className="fas fa-chevron-right me-2 chevron"></i>Les produits de la mer mal cuits.</li>
</ul>
</div>
</div>
<div className='container-fluid bg bg-primary mt-3 container-health'>

<div className='col-lg-12 col-sm-12'>
<div className='row health-nutrition'>
 <div className='col-lg-8 col-sm-12 pt-5 pb-5'>
 <div className='health-3'>
  <h1 className='health-1 ps-5 pt-3'>We Provide Free Health Care Consultation</h1>
<p className='health-2 ps-5' style={{letterSpacing:"2px"}}>Your Health is Our Top Priority with Comprehensive, Affordable Health.</p>
</div>
</div>
<div className='col-lg-4 col-sm-12 text-end pt-5'>
  <div className='health-appointment'>
<Link to="/createRegister" data-bs-ripple-init  className="btn btn-white mt-4 health-register health-appointment">Appointment</Link>
</div>
</div>
</div>
</div>
</div>



{/*stories*/}
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
      <div className="col-lg-8 col-sm-12 pb-3">
        <div className="card-body pt-5">
          <h5 className="card-title title-1">Welcome to Healthcare</h5>
          <p className="card-text fs-4">
          Prendre soin de sa santé de manière naturelle est l’une des meilleures façons 
          d’améliorer son bien-être global.
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
{/*stories*/}

           </div>
           </div>
           </body>
           
     
           


</>

    )
}
export default Nutrition;