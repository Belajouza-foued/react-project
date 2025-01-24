import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
const Blog = () => {
  return(
    <>
      
    <div className="container">
     
    <div classNameName="main-panel">
                  
                  <section className="page-title">		
              <div className="container">
                <div className="inner-title pb-5">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="https://www.fitness.com/fr">Accueil</Link></li>
                    <li className="breadcrumb-item"><Link to="https://www.fitness.com/fr/articles">Article</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Santé</li>
                  </ol>
                </div>
              </div>
            </section>
           <div className="col-lg-4 sidebar">
						<div className="widget">
							<div className="widget__block text-center">
								<script type="text/plain" async className="cmplazyload" data-cmp-vendor="755" data-cmp-src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2455189569043453" crossorigin="anonymous"></script> <ins className="adsbygoogle" style={{display:'inline-block', width:'300px',height:'250px'}} data-ad-client="ca-pub-2455189569043453" data-ad-slot="5459903463"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>
							</div>
							<div className="widget__block">
								<h4>Catégorie</h4>
								<div className="widget__body">
									<div className="row">
																					<div className="col-sm-6">
												<Link  to="https://www.fitness.com/fr/articles/category/le-nutriotion" className="widget__links">
													<h3>123</h3>
													Nutrition
												</Link>
											</div>
																					<div className="col-sm-6">
												<Link  to="https://www.fitness.com/fr/articles/category/sante" className="widget__links">
													<h3>5</h3>
													Santé
												</Link>
											</div>
																					<div className="col-sm-6">
												<Link  to="https://www.fitness.com/fr/articles/category/bien-etre-et-style-de-vie" className="widget__links">
													<h3>3</h3>
													Bien-être et Style de vie
												</Link>
											</div>
																					<div className="col-sm-6">
												<Link  to="https://www.fitness.com/fr/articles/category/sport-et-entrainement" className="widget__links">
													<h3>35</h3>
													Sport et Entraînement
												</Link>
											</div>
																		
									</div>								
								</div>
							</div>

							<div className="widget__block mt-5">
								<div className="tabs">
	<ul className="tab-nav" role="tablist">
		<li><Link  to="#popular" className='active'>Populaire</Link></li>
		<li><Link  to="#active">Le plus actif</Link></li>
		<li><Link  to="#random">Aléatoire</Link></li>
	</ul>

	<div className="tab-container widget__body">
		<div className="tab-content" role="tabpanel" id="popular">
			<div className="entry-sm row">
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/un-coach-sportif-au-poignet" title="Un coach sportif au poignet">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1236950820_polar4.jpg" alt="Un coach sportif au poignet" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/un-coach-sportif-au-poignet">Un coach sportif au poignet</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/victoria-beckham-donne-des-frissons" title="Victoria Beckham donne des frissons…">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1320326697_ansichten_vikki.jpg" alt="Victoria Beckham donne des frissons…" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/victoria-beckham-donne-des-frissons">Victoria Beckham donne des frissons…</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/maigrir-sans-regime" title="Maigrir sans régime?">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1295261789_mimi_spencer.jpg" alt="Maigrir sans régime?" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/maigrir-sans-regime">Maigrir sans régime?</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/le-the-vert-la-boisson-miracle" title="Le thé vert – La boisson miracle!">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1294044436_frau_gruentee.jpg" alt="Le thé vert – La boisson miracle!" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/le-the-vert-la-boisson-miracle">Le thé vert – La boisson miracle!</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/la-force-des-sels-mineraux" title="La force des sels minéraux">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1291798110_salz.jpg" alt="La force des sels minéraux" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/la-force-des-sels-mineraux">La force des sels minéraux</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
							</div>
		</div>
		<div className="tab-content" role="tabpanel" id="active">
			<div className="entry-sm row">
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/fitness-plug-and-play" title="Fitness: “Plug and Play”">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1234770748_miha_bodytec_2s.jpg" alt="Fitness: “Plug and Play”" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/fitness-plug-and-play">Fitness: “Plug and Play”</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/vitamine-d-plus-important-que-jamais-meme-apres-lete" title="Vitamine D : Plus Important que Jamais – Même Après l&#039;Été">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/q5nkHHoI77XaIFGjcCIkZqSO2wUeBZkbFmb201RQ.jpg" alt="Vitamine D : Plus Important que Jamais – Même Après l&#039;Été" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/vitamine-d-plus-important-que-jamais-meme-apres-lete">Vitamine D : Plus Important que Jamais – Même Après l&#039;Été</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/un-coach-sportif-au-poignet" title="Un coach sportif au poignet">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1236950820_polar4.jpg" alt="Un coach sportif au poignet" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/un-coach-sportif-au-poignet">Un coach sportif au poignet</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/le-grand-perdant-the-biggest-loser-qui-est-le-vrai-grand-gagnant" title="„Le Grand Perdant“ (The Biggest Loser): qui est le vrai grand gagnant?">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1236251666_mann_bauch_dick.jpg" alt="„Le Grand Perdant“ (The Biggest Loser): qui est le vrai grand gagnant?" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/le-grand-perdant-the-biggest-loser-qui-est-le-vrai-grand-gagnant">„Le Grand Perdant“ (The Biggest Loser): qui est le vrai grand gagnant?</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/pas-de-gueule-de-bois-pendant-le-carnaval" title="Pas de gueule de bois pendant le carnaval !">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1235127056_karneval_2.jpg" alt="Pas de gueule de bois pendant le carnaval !" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/pas-de-gueule-de-bois-pendant-le-carnaval">Pas de gueule de bois pendant le carnaval !</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
							</div>
		</div>
		<div className="tab-content" role="tabpanel" id="random">
			<div className="entry-sm row col-mb-30" id="recent-entry-list-sidebar">
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/les-blessures-les-plus-courantes-lors-des-accidents-de-ski-attention" title="Les blessures les plus courantes lors des accidents de ski – Attention !">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/ukjYozXLJbppD3tjO5kOhG349a9iZEZKQcQCOguX.jpg" alt="Les blessures les plus courantes lors des accidents de ski – Attention !" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/les-blessures-les-plus-courantes-lors-des-accidents-de-ski-attention">Les blessures les plus courantes lors des accidents de ski – Attention !</Link></h4>
								
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/la-star-du-football-cristiano-ronaldo-enchante-les-fans-et-la-gente-feminine" title="La star du football Cristiano Ronaldo enchante les fans et la gente féminine.">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/1242639307_ronaldo_7.jpg" alt="La star du football Cristiano Ronaldo enchante les fans et la gente féminine." />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/la-star-du-football-cristiano-ronaldo-enchante-les-fans-et-la-gente-feminine">La star du football Cristiano Ronaldo enchante les fans et la gente féminine.</Link></h4>
							
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/le-pere-noel-au-fitness-un-entrainement-parisien-avant-la-grande-tournee" title="Le Père Noël au Fitness : Un entraînement parisien avant la grande tournée">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/CrEVOfE4n3AJmSsHYo94JRPMMCboiEdlLtezYMtn.jpg" alt="Le Père Noël au Fitness : Un entraînement parisien avant la grande tournée" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/le-pere-noel-au-fitness-un-entrainement-parisien-avant-la-grande-tournee">Le Père Noël au Fitness : Un entraînement parisien avant la grande tournée</Link></h4>
							
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/le-regime-miami-ou-south-beach-le-parcours-a-suivre-pour-une-ligne-de-reve" title="Le régime Miami (ou South Beach): le parcours à suivre pour une ligne de rêve">
										<img loading="lazy" src="https://www.fitness.com/assets/frontend/images/default.png" alt="Le régime Miami (ou South Beach): le parcours à suivre pour une ligne de rêve" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/le-regime-miami-ou-south-beach-le-parcours-a-suivre-pour-une-ligne-de-reve">Le régime Miami (ou South Beach): le parcours à suivre pour une ligne de rêve</Link></h4>
							
								</div>
							</div>
						</div>
					</div>
									<div className="entry col-12 mb-3">
						<div className="grid-inner row no-gutters">
							<div className="col-auto">
								<div className="entry-image overflow-hidden">
									<Link  to="https://www.fitness.com/fr/articles/le-ski-alpin-en-2024-les-meilleures-destinations-et-les-dates-douverture-de-la-saison" title="Le ski alpin en 2024 : Les meilleures destinations et les dates d’ouverture de la saison">
										<img loading="lazy" src="https://www.fitness.com/uploads/articles/4AeRJl8QOJOvMTfd2bbf76b9RJR71OIp20Aa1Xic.jpg" alt="Le ski alpin en 2024 : Les meilleures destinations et les dates d’ouverture de la saison" />
									</Link>
								</div>
							</div>
							<div className="col pl-3">
								<div className="entry-title">
									<h4><Link  to="https://www.fitness.com/fr/articles/le-ski-alpin-en-2024-les-meilleures-destinations-et-les-dates-douverture-de-la-saison">Le ski alpin en 2024 : Les meilleures destinations et les dates d’ouverture de la saison</Link></h4>
								
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
					</div>
          
                  
                  </div>
    </div>

    </>
  )
}
export default Blog;