import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import image from './images/person-3.jpg'
import   '../pages/styles/Admin.css';
import { Component } from 'react';
import axios from 'axios';
import AdminService from '../services/admin.service';
export default class ListAdmin extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getAdmins = this.getAdmins.bind(this);
    //activ admin
    this.setActiveAdmin = this.setActiveAdmin.bind(this);
    //actualiser la page   
    this.refreshListAdmin = this.refreshListAdmin.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllAdmin = this.deleteAllAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);



this.state = {
  admins: [],
  searchName: "",
  adminCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getAdmins();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getAdmins () {
  AdminService.getAll ()
  .then(response =>{this.setState({
    admins :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListAdmin() {
  this.getAdmins ();
  this.setState ({
    adminCourant: null,
    index: -1
  })
}
setActiveAdmin(admin , index) {  
  this.setState({
  adminCourant : admin,
  index : index
});
}
searchByName(){
    AdminService.findByTitle(this.state.searchName)
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
deleteAllAdmin(){
  AdminService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListAdmin();
  })
  .catch(e => {
    console.log(e)
  });
}
deleteAdmin(id) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer cet admin ?")) {
    AdminService.delete(id)
      .then(response => {
        console.log(response.data);
        this.refreshListAdmin();
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
    await axios.delete(`http://localhost:5000/api/admins/${id}`);
    // Mettez à jour l'état local
    this.setState({
      admins: this.state.admins.filter(admin => admin._id !== id)
    });
    alert('Admin supprimé avec succès');
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    alert('Erreur lors de la suppression');
  }
};

render () {
  const {searchName , admins, adminCourant , indexCourant }= this.state; 
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
     
       <h1 className='pt-3'>Admin list</h1>
       <div className="col-lg-12 col-sm-12 pt-3 container-fluid">       
       <table className="table-admin align-middle container-fluid">
<thead className="">
 <tr className='table-title'>
   <th className='left-table'>photo</th>
   <th>Id</th>
   <th>Name</th>
   <th>email</th>
   <th>password</th>
   <th>update</th>
   <th className='right-table'>delete</th>
 
 </tr>
</thead>
<tbody className='body-table'>
  {admins && admins.map((
    admin, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === adminCourant ? "active": "")} onClick ={() => this.setActiveAdmin(admin, index)} key={index}>  
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
    <span>{admin._id}</span>
    </td> 
   <td>
    <span>{admin.name}</span>
    </td>  
          <td>
    <span>{admin.email}</span>
    </td> 
    <td>
    <span>{admin.password}</span>
    </td>   
      
    
<td>
     <Link to={"/admin/"+ admin._id} type="button" className="btn btn-warning">
       Edit
     </Link>
   </td>
   <td>
   <button  className='btn btn-danger btn-position'  onClick={() => this.deleteAdmin(admin._id)}>
  Delete
</button>
    
   </td>
 </tr>
 ))}

</tbody>
</table>
     </div>
     <div className="col-lg-12 col-sm-12 d-flex text-align-center justify-content-center pb-5">
    < Link to={'/addAdmin'}className='btn btn-success btn-position me-4'>Add new admin</Link>
    < button className='btn btn-danger btn-position' onClick={this.deleteAllAdmin}>Delete all admins</button>
    </div>
    
   </div>
 </div>
</>)
}
  
}
    
  


