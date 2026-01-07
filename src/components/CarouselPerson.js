
import { Link} from "react-router-dom";
import staff1 from "../pages/images/person_1.jpg"
import staff2 from "../pages/images/person_2.jpg"
import staff3 from "../pages/images/person_3.jpg"


  const CarouselPerson = () => {
  return (
    <>


<div id="carouselId" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ maxWidth: "400px", borderRadius:"25px" }}>
          <img src={staff1} className="card-img-top" alt="Nicolas Durant" style={{ borderRadius:"25px 25px 0px 0px" }}/>
          <div className="card-body" style={{ borderRadius:"25px" }}>
            <h5 className="card-title">Nicolas Durant</h5>
            <p className="card-text">
              Une équipe à l’écoute et un programme qui s’adapte parfaitement à mes besoins.
            </p>
            <Link to="/contact" className="btn btn-primary">Contact</Link>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ maxWidth: "400px" }}>
          <img src={staff2} className="card-img-top" alt="Yassine Khaled" />
          <div className="card-body">
            <h5 className="card-title">Jhon Beckham</h5>
            <p className="card-text">
              Grâce à ce programme, j'ai retrouvé ma forme et une énergie incroyable.
            </p>
            <Link to="/contact" className="btn btn-primary">Contact</Link>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ maxWidth: "400px" }}>
          <img src={staff3} className="card-img-top" alt="Sarah Martin" />
          <div className="card-body">
            <h5 className="card-title">Martin Anderson</h5>
            <p className="card-text">
              Un accompagnement professionnel et motivant du début à la fin.
            </p>
            <Link to="/contact" className="btn btn-primary">Contact</Link>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


    
    </>
  );
};

export default CarouselPerson;
