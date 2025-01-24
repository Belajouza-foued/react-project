import { Component } from "react";
import AdminService from "../services/admin.service";
import {crudRouter} from "../Crud-router";
import './styles/EditAdmin.css'
class EditAdmin extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
                this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);    
        this.editAdmin = this.editAdmin.bind(this); 
        this.getAdmin = this.getAdmin.bind(this);    
            this.state = {
                selectAdmin : {
                    id: null,        
                    name:"",
                 email:"",
                    password:"",
               }              

        };
      }
      componentDidMount(){
        this.getAdmin(this.props.router.params.id)
      }
   onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState){
        return{
            selectAdmin :{
...prevState.selectAdmin,
name:name,

            }
        }
    })
   }  
   onChangeEmail(e) {
    const email = e.target.value;
    this.setState(function(prevState){
        return{
            selectAdmin :{
...prevState.selectAdmin,
email:email,

            }
        }
    })
   }  
   onChangePassword(e) {
    const password = e.target.value;
    this.setState(function(prevState){
        return{
            selectAdmin :{
...prevState.selectAdmin,
password:password,

            }
        }
    })
   } 
   //get admin by id// 
   getAdmin(id) {
    AdminService.get(id)
    .then(response =>{this.setState({
      selectAdmin :response.data,
    });
  console.log (response.data);
  
  })
  .catch(err => {
    console.log (err);
  })
  
  }
  //function update admin//
  editAdmin(){
    AdminService.update(
this.state.selectAdmin._id,
this.state.selectAdmin
    )
    .then(response => {
        console.log(response.data);
        this.props.router.navigate('/admin')
    })
    .catch(err =>{
        console.log(err);        
    });
  }
  render() {
    const { selectAdmin } = this.state;
    return(
<div>
{selectAdmin ? (
        <div className="container">
            <div className="row">                
<div className="col-lg-4 col-sm-12 pt-5">
<input type="text" className="form-control custom-border" id="name" value={selectAdmin.name}
 onChange={this.onChangeName}/>
</div>
<div className="col-lg-4 col-sm-12 pt-5">
<input type="text" className="form-control custom-border" id="email" value={selectAdmin.email}
 onChange={this.onChangeEmail}/>    
</div>
<div className="col-lg-4 col-sm-12 pt-5">
<input type="text" className="form-control custom-border" id="password" value={selectAdmin.password}
 onChange={this.onChangePassword}/>
    
</div>


<div className="col-12 text-center justify-content-center align-item-center pt-5">
    <button className="btn btn-warning" onClick={this.editAdmin}>Edit admin</button>
</div>

            </div>        
        </div>
        ):(
    <h1>Admin modified</h1>      
    )};
</div>

    )
  }
}
export default crudRouter(EditAdmin);