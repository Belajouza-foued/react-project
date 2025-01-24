import React, { Component } from "react";
import GraphicService from "../services/graphic.service";
import '../pages/styles/AddGraphic.css'
import coach from "../pages/images/coach-1.jpg"
import { crudRouter } from '../Crud-router';
 class AddGraphic extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        
        this.onChangeUv = this.onChangeUv.bind(this);
        this.onChangePv = this.onChangePv.bind(this);       
        this.onChangeAmt = this.onChangeAmt.bind(this);   

        this.saveAddGraphic = this.saveAddGraphic.bind(this);
        this.saveAddGraphic = this.saveAddGraphic.bind(this);
     
    
        this.state = {
          id: null,
        
          name:"",
          
          uv:"",
          pv:"",
          amt:"",
          submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      
      onChangeUv(e) {
        this.setState({
          uv: e.target.value
        });
      }
      onChangePv(e) {
        this.setState({
          pv: e.target.value
        });
      }
      onChangeAmt(e) {
        this.setState({
          amt: e.target.value
        });
      }
      saveAddGraphic() {
        var data = {
          name: this.state.name,          
          uv : this.state.uv,
          pv : this.state.pv,
          amt : this.state.amt,
        };
    
        GraphicService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
        
              name:response.data.name,
              
              uv: response.data.uv,
              pv :response.data.pv,
              amt :response.data.amt,
                          
            });
         })
         .then(
          () => {
            this.props.router.navigate("/graphic");
            window.location.reload();
          }
        );
      }    
    
      addAdmin() {
        this.setState({
            id: null,        
            name:"",            
            uv:"",
            pv:"",
        amt:"",
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
            <label htmlFor="text">UV</label>
            <input
              type="text"
              className="form-control"
              id="uv"
              required
              value={this.state.uv}
              onChange={this.onChangeUv}
              name="uv"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">P V</label>
            <input
              type="text"
              className="form-control"
              id="pv"
              required
              value={this.state.pv}
              onChange={this.onChangePv}
              name="pv"           />         
          
          </div>
          <div className="form-group">
            <label htmlFor="text">AMT</label>
            <input
              type="text"
              className="form-control"
              id="amt"
              required
              value={this.state.amt}
              onChange={this.onChangeAmt}
              name="amt"  />         
          
          </div>
          <div className="button-add">
          <button onClick={this.saveAddGraphic} className="btn btn-success mt-5">
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
export default crudRouter(AddGraphic);
