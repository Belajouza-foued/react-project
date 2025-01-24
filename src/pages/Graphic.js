import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import image from './images/person-3.jpg'
import   '../pages/styles/Admin.css';
import { Component } from 'react';
import axios from 'axios';
import GraphicService from '../services/graphic.service';
export default class ListGraphic extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getGraphics = this.getGraphics.bind(this);
    //activ admin
    this.setActiveGraphic = this.setActiveGraphic.bind(this);
    //actualiser la page   
    this.refreshListGraphic = this.refreshListGraphic.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllGraphic = this.deleteAllGraphic.bind(this);
    this.deleteGraphic = this.deleteGraphic.bind(this);



this.state = {
  graphics: [],
  searchName: "",
  graphicCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getGraphics();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getGraphics () {
  GraphicService.getAll ()
  .then(response =>{this.setState({
    graphics :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListGraphic() {
  this.getGraphics ();
  this.setState ({
    graphicCourant: null,
    index: -1
  })
}
setActiveGraphic(graphic , index) {  
  this.setState({
  graphicCourant : graphic,
  index : index
});
}
searchByName(){
    GraphicService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
            admins: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllGraphic(){
  GraphicService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListGraphic();
  })
  .catch(e => {
    console.log(e)
  });
}
deleteGraphic(id) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer cet admin ?")) {
    GraphicService.delete(id)
      .then(response => {
        console.log(response.data);
        this.refreshListGraphic();
        alert('Admin supprimé avec succès');
      })
      .catch(e => {
        console.log(e);
        alert('Erreur lors de la suppression');
      });
  }
}

handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/graphics/${id}`);
    // Mettez à jour l'état local
    this.setState({
      graphics: this.state.graphics.filter(graphic => graphic._id !== id)
    });
    alert('Admin supprimé avec succès');
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    alert('Erreur lors de la suppression');
  }
};

render () {
  const {searchName , graphics, graphicCourant , indexCourant }= this.state; 
  return ( 
    <>
 <div className="container-fluid">
   <div className="row">
   
    <div className='col-lg-9 col-sm-12'>
      
    <div className="input-group">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-outline-success" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
     
       <h1 className='pt-3'>Graphic list</h1>
       <div className="col-lg-12 col-sm-12 pt-3 container-fluid">       
       <table className="table-admin align-middle container-fluid">
<thead className="">
 <tr className='table-title'>
   <th className='left-table'>photo</th>
   <th>Id</th>
   <th>Name</th>
   <th>uv</th>
   <th>pv</th>
   <th>amt</th>
   <th className='right-table'>delete</th>
 
 </tr>
</thead>
<tbody className='body-table'>
  {graphics && graphics.map((
    graphic, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === graphicCourant ? "active": "")} onClick ={() => this.setActiveGraphic(graphic, index)} key={index}>  
   <td>
     <div className="d-flex align-items-center">
       <img
           src={image}
           alt=""         
                     className="rounded-circle admin-img"
           />
       
     </div>
   </td>
   <td>
    <span>{graphic._id}</span>
    </td> 
   <td>
    <span>{graphic.name}</span>
    </td>  
          <td>
    <span>{graphic.uv}</span>
    </td> 
    <td>
    <span>{graphic.pv}</span>
    </td>   
    <td>
    <span>{graphic.amt}</span>
    </td>   
      
    
<td>
     <Link to={"/graphic/"+ graphic._id} type="button" className="btn btn-warning">
       Edit
     </Link>
   </td>
   <td>
   <button  className='btn btn-danger btn-position'  onClick={() => this.deleteGraphic(graphic._id)}>
  Delete
</button>
    
   </td>
 </tr>
 ))}

</tbody>
</table>
     </div>
     <div className="col-lg-12 col-sm-12 d-flex text-align-center justify-content-center pb-5">
    < Link to={'/addGraphic'}className='btn btn-success btn-position me-4'>Add new Graphique</Link>
    < button className='btn btn-danger btn-position' onClick={this.deleteAllGraphic}>Delete all graphics</button>
    </div>
    
   </div>
 </div>
</>)
}
  
}
    
  


