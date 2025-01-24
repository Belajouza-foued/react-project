import React, { Component } from "react";
import AdminService from "../services/admin.service";
import '../pages/styles/AddAdmin.css'
import coach from "../pages/images/coach-1.jpg"
import { crudRouter } from '../Crud-router';
 class AddAdmin extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);       

        this.saveAddAdmin = this.saveAddAdmin.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
     
    
        this.state = {
          id: null,
        
          name:"",
          
          email:"",
          password:"",
          submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
      saveAddAdmin() {
        var data = {
          name: this.state.name,          
          email : this.state.email,
          password : this.state.password
        };
    
        AdminService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
        
              name:response.data.name,
              
              email: response.data.email,
              password :response.data.password,
                          
            });
         })
         .then(
          () => {
            this.props.router.navigate("/admin");
            window.location.reload();
          }
        );
      }    
    
      addAdmin() {
        this.setState({
            id: null,        
            name:"",            
            email:"",
            password:"",
          submitted: false
        });
      }
render() {
  return (
    <div className="container add-container">
        <div className="row">
            <div className="col-lg-3 col-sm-12 pt-5 add-img">
    <img src={coach} alt="coach" className="img-fluid rounded-start add-coach"/>
            </div>
        <div className="col-lg-9 col-sm-12  pt-5 form-add">
    <div className="submit-form ">
      {this.state.submitted ? (
        <div>
                  
        </div>
      ) : (
        <div className="container bg-info form-container">
          <div className="form-group">
            <label htmlFor="nom">nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={this.state.password}
              onChange={this.onChangePassword}
              name="password"           />         
          
          </div>
          <div className="button-add">
          <button onClick={this.saveAddAdmin} className="btn btn-success mt-5">
            Submit
          </button>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}
}
export default crudRouter(AddAdmin);
